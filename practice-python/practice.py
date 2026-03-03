import json

def load_users():
    try: 
        with open("users.json", "r") as file:
            users = json.load(file)
    except FileNotFoundError:
        users = []
    return users

def save_users(users):
    with open("users.json", "w") as file:
        json.dump(users, file)

def user_exists(users, user_id):
    for user in users:
        if user["id"] == user_id:
            return True
    return False

def print_users(users):
    print("=== list ===")
    num = 1
    for el in users:
        print(f"{num}. {el['name']}")
        num += 1
    print("============")

def add_user(users):
    new_id = int(input("What is new id?: "))
    if user_exists(users, new_id):
        print("This is invalid id")
    else:
        new_name = input("What is new name?: ")
        users.append({"id":new_id, "name":new_name})
        print("Add user successfully")
        print_users(users)
        save_users(users)

def remove_user(users):
    remove_id = int(input("What is removing id?: "))
    if not user_exists(users, remove_id):
        print("This is not existing id")
    else:
        users[:] = [user for user in users if user["id"] != remove_id] 
        print_users(users)
        save_users(users)

def search_user(users):
    search_id = int(input("Input id that you want to search: "))
    found = False
    for user in users:
        if user["id"] == search_id:
            print(user["name"])
            found = True
            break
    if not found:
        print("User not found")

users = load_users()

while True:
    menu_num = int(input(""\
    "1. Show users\n" \
    "2. Add user\n" \
    "3. Remove user\n" \
    "4. Search user by id\n"
    "5. Exit\n"
    "Type menu number: "))

    if menu_num == 1:
        print_users(users)
    elif menu_num == 2:
        add_user(users)
    elif menu_num == 3:
        remove_user(users)
    elif menu_num == 4:
        search_user(users)
    elif menu_num == 5:
        # save_users(users)
        break
    else:
        print("Input number is invalid")


# ==== 2026-03-01 ====

# numbers = [4, 12, 7, 22, 3]
# largest_number = numbers[0];
# for num in numbers[1:]: # Is it possible to instruct from numbers[1]?
#     if largest_number < num:
#         largest_number = num;

# print(f"The Largest Number: {largest_number}")

# fruits = ["grape", "banana", "peach", "strawberry"]

# for fruit in fruits:
#     print(fruit)

# users = [
#     {"id":1, "name":"Maria"},
#     {"id":2, "name":"John"},
#     {"id":3, "name":"Peter"}
# ]

# def search_by_id(user_id):
#     for user in users:
#         if user["id"] == user_id:
#             return user["name"]
#     return "User not found"

# searchId = int(input("Input id that you want to search: "))
# print(search_by_id(searchId))


# for num in range(1, 101):
#     if num % 2 == 0:
#         parity = "even"
#     else:
#         parity = "odd"
#     print(str(num) + " " + parity)


# def calculator(x, y, operator):
#     if operator == "+":
#         return x + y
#     elif operator == "-":
#         return x - y
#     elif operator == "*":
#         return x * y
#     elif operator == "/":
#         return x / y
#     elif operator == "%":
#         return x % y
#     else:
#         return "invalid operator"

# x = int(input("Enter the first number: "))
# y = int(input("Enter the second number: "))
# op = (input("Enter the operator(+, -, *, /, %): "))

# print(calculator(x, y, op))