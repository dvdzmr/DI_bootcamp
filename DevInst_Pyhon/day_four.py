import random


magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']


data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def display_message():
    print("Today we are learning about functions")





def favorite_book(title):
    print(f"One of my favorite books is {title}")



def describe_city(city, country):
    print(f"{city} is in {country}")



def randomnumbergen(number):
    random_num =random.randrange(0,100)
    if random_num == number:
        print("Wow what are the odds of that huh")
    else:
        print(f"Womp Womp. Your number was {number} and mine was {random_num}")



def makeshirt(size="large", message="I Love python"):
    print(f"You picked size: {size} with text: {message}")


def show_magicians():
    for item in magician_names:
        print(item)


def make_great():
    # global magician_names
    length = len(magician_names)
    i = 0
    while i < length:
        magician_names[i] = "The Great " + magician_names[i]
        i += 1


def get_random_temp(season):
    #return random.randrange(-10, 40)
    season = season.upper()  # always a good idea to avoid bad equality comparisons
    if season == "SPRING":
        return random.randrange(-5, 17)
    if season == "SUMMER":
        return random.randrange(20, 40)
    if season == "FALL" or season == "AUTUMN":
        return random.randrange(10, 30)
    if season == "WINTER":
        return random.randrange(-10, 0)
    else:
        return random.randrange(-10, 40)


def random_question():
    print("Hello and welcome to the star wars quiz.")
    i = 0
    answer = ""
    while i < len(data):
        local_data = data[i]
        for key, value in local_data.items():
            if key == "question":
                print(value)
                answer = input()
            if key == "answer":
                if value.upper() == answer.upper():
                    print("Answer is correct!")
                else:
                    print("Answer is wrong!")
        i += 1





def main():
    display_message()
    favorite_book("Harry Potter")
    describe_city("Rotterdam", "The Netherlands")
    randomnumbergen(10)
    makeshirt()
    makeshirt("large")
    makeshirt("Medium")
    makeshirt("Extra Small", "I hope this text will fit on a shirt so small as this one. It would really su")
    show_magicians()
    make_great()
    show_magicians()
    random_temp = get_random_temp("Winter")

    if random_temp < 0:
        print(f"The temperature right now is {random_temp} degrees Celsius")
        print("Brrr very cold")
    elif random_temp == 0 or random_temp <= 16:
        print(f"The temperature right now is {random_temp} degrees Celsius")
        print("Dont forget to bring a coat!")
    elif random_temp > 16 and random_temp <= 23:
        print(f"The temperature right now is {random_temp} degrees Celsius")
        print("Not too bad, nice weather")
    elif random_temp > 23 and random_temp <= 32:
        print(f"The temperature right now is {random_temp} degrees Celsius")
        print("Lets go to the beach")
    elif random_temp > 32 and random_temp <= 40:
        print(f"The temperature right now is {random_temp} degrees Celsius")
        print("Dont sit on metal benches in the sun")


    random_question()
main()