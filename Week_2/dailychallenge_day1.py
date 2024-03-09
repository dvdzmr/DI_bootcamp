

def user_input():
    user_text = input("Enter a string")
    if len(user_text) < 10:
        print("String not long enough")
    if len(user_text) > 10:
        print("String too long")
    if len(user_text) == 10:
        print("String is perfect")

    print(user_text[0], user_text[-1])

    empty_input = ""
    for char in user_text:
        empty_input += char
        print(empty_input)


user_input()