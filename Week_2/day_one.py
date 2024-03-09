# Exercise 1
def print_helloworld():
    i = 0
    while i <= 3:
        print("Hello World")
        i += 1


# Exercise 2
def maths():
    print((99 ^ 3) * 8)


# Exercise 3
def outcomes():
    print(5 < 3)  # FALSE
    print(3 == 3)  # TRUE
    print(3 == "3")  # FALSE
    # print("3" > 3) # ERROR
    print("Hello" == "hello")  # FALSE


# Exercise 4
def computer():
    brand = "Asus"
    print(f"I have a {brand} computer")


# Exercise 5
def my_details():
    name = "David"
    age = 27
    shoe_size = 44
    info = f"My name is {name} and I am {age} years, my shoesize is {shoe_size} and I an oleh chadash"
    print(info)


# Exercise 6

def if_helloworld():
    a = 10
    b = 5
    if a > b:
        print("Hello World")


# Exercise 7
def oddoreven(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"


def same_name(name):
    if name.upper() == "DAVID":
        return "Oh wow we have the same name!"
    else:
        return f"That's lame, your name is {name} and my name is David"


def imperial_to_metric(height_imperial):
    height = round(height_imperial * 2.54, 1)
    if height <= 145:
        return f"Height is {height}cm. You are not tall enough to go on this ride."
    elif height > 145:
        return f"Height is {height}cm. You are allowed to go on this ride."


# XP gold exercise 1
def print_oneliner():
    print("Hello World\nHello World\nHello World\nHello World\nI love python\nI love python\nI love python\nI love "
          "python\n")


# XP gold exercise 2
def season(month):
    if month >= 1 and month <= 2 or month == 12:
        return "Winter"
    if month >= 3 and month <= 5:
        return "Spring"
    if month >= 6 and month <= 8:
        return "Summer"
    if month >= 9 and month <= 11:
        return "Fall"


# XP Ninja Exercise 4

def wordcounter():
    my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum."
    print(len(my_text.split()))  # splitting on empty space


def longest_word():
    record = 0
    while True:
        usertext = input("Enter your sentence without the letter A").lower()
        if "a" in usertext:  # Scanning the string for the letter A.
            print("Your sentence contains an A. Failed. Resetting highscore.")
            record = 0
        else:  # If no A is found, count the words using split.
            if len(usertext.split()) > record:
                record = len(usertext.split())
                print(f"Nice, new highscore: {len(usertext.split())} points")
            else:
                print(f"Nice sentence, but your sentence did not break the highscore")



print_helloworld()
maths()
outcomes()
computer()
my_details()
if_helloworld()
print(oddoreven(7))
print(oddoreven(10))
print(same_name("david"))
print(same_name("tal"))
print(imperial_to_metric(45))
print(imperial_to_metric(70))
print(print_oneliner())
print(season(9))
print(season(1))
print(season(4))
print(season(5))
print(season(12))
wordcounter()
longest_word()
