from fastapi import FastAPI
from fastapi import HTTPException
from sqlmodel import SQLModel, Field, create_engine, Session, select
from typing import Optional

app = FastAPI()

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url)

def create_db_and_table():
    SQLModel.metadata.create_all(engine)

def user_exists(users, user_id):
    return any(user["id"] == user_id for user in users)

@app.on_event("startup")
def on_startup():
    create_db_and_table()

@app.get("/users")
def get_users():
    with Session(engine) as session:
        users = session.exec(select(User)).all()
        return users

@app.get("/users/{user_id}")
def get_user(user_id: int):
    with Session(engine) as session:
        user = session.get(User, user_id)
        return user

@app.put("/users/{user_id}")
def update_user(user_id: int, updated_user: User):
    with Session(engine) as session:
        user = session.get(User, user_id)
        if not user: 
            raise HTTPException(status_code=404, detail="User not found")
        user.name = updated_user.name
        
        session.add(user)
        session.commit()
        session.refresh(user)
        return user

@app.post("/users", status_code=201)
def create_user(user: User):
    with Session(engine) as session:
        if user_exists(session, user.id) == True:
            raise HTTPException(status_code=409, detail="Duplicate id")
        session.add(user)
        session.commit()
        session.refresh(user)
        return user

@app.delete("/users/{user_id}", status_code=204)
def delete_user(user_id: int):
    with Session(engine) as session:
        user = session.get(User,user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        
        session.delete(user)
        session.commit()