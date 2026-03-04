import json
from fastapi import FastAPI
from fastapi import HTTPException
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    name: str

def load_users():
    try:
        with open("users.json", "r") as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def save_users(users):
    with open("users.json", "w") as file:
        json.dump(users, file)

def user_exists(users, user_id):
    return any(user["id"] == user_id for user in users)

@app.get("/users")
def get_users():
    return load_users()

@app.get("/users/{user_id}")
def get_user(user_id: int):
    users = load_users()
    for user in users:
        if user["id"] == user_id:
            return user
    raise HTTPException(status_code=404, detail="User not found")

@app.get("/users/{user_id}")
def update_user(user_id: int, updated_user: User):
    users = load_users()
    for user in users:
        if user["id"] == user_id:
            user["name"] = updated_user.name
            save_users(users)
            return user
    raise HTTPException(status_code=404, detail="User not found")

@app.post("/users", status_code=201)
def create_user(user: User):
    users = load_users()
    if user_exists(users, user.id) == True:
        raise HTTPException(status_code=409, detail="This is existing id")
    users.append(user.dict())
    save_users(users)
    return {"message":"User created"}

@app.delete("/users/{user_id}", status_code=204)
def delete_user(user_id: int):
    users = load_users()
    if user_exists(users, user_id) == False:
        raise HTTPException(status_code=404, detail="This is not existing id")
    users = [u for u in users if u["id"] != user_id]
    save_users(users)
    return {"message": "User deleted"}