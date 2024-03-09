# exercise 1
def favorite_number():
    fav_numbers = {1, 5, 10, 15, 20, 25, 30, 35}
    fav_numbers.add(39)
    fav_numbers.add(47)
    fav_numbers.pop()
    friend_favorite_numbers = {100, 200, 300, 400, 500}
    our_fav_numbers = fav_numbers.union(friend_favorite_numbers)
    print(our_fav_numbers)


# exercise 2
def int_tuple():
    my_tuple = (1, 2, 3)
    print(my_tuple)  # You cannot edit a tuple after creation, you can creat a new tuple from it however with changes.



# exercise 3

def my_list():
    basket = ["Banana", "Apples", "Oranges", "Blueberries"]
    basket.pop(0)
    basket.pop(2)
    basket.append("Kiwi")
    # apples var is already the beginning of the list, but if i wanted to do it i would do it like:
    # basket.insert(0, "Apples")
    # #basket.pop(1)
    print(basket)

# exercise 4

def my_float():
    i = 0
    float_var = [1.5]
    while i < 7:
        float_var.append(float_var[i]+0.5)
        i += 1
    print(float_var)


def my_forloop():
    for i in range(0, 21):
        print(i)


def my_whileloop():
    myname = "David"
    username = ""
    while username.lower() != myname.lower():
        username = input("Enter your name")

def pizza_toppings():
    toppings = []
    while True:
        topping_name = input("Name a pizza topping or type quit to exit. ")
        if topping_name.lower() == "quit":
            break
        print("Adding topping to your pizza")
        toppings.append(topping_name)
    print("Your toppings: ", toppings)

def cinema_tickets(restricted = False):
    family_ages = input("Enter your family members age seperated by a space").split()
    total = 0
    if restricted:
        restricted_family = []
        for age in family_ages:
            if int(age) > 16:
                restricted_family.append(age)
        family_ages = restricted_family
    for age in family_ages:
        if 3 <= int(age) <= 12:
            total += 10
        if int(age) > 12:
            total += 15
    print(f"Your total is {total}")


def sandwich_order():
    sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich",
                       "Chicken sandwich", "Pastrami sandwich"]
    list_length = len(sandwich_orders)
    i = 0
    while i < list_length:
        if "Pastrami" in sandwich_orders[i]:
            sandwich_orders.remove(sandwich_orders[i])
            list_length -= 1  # take one length off to prevent going above the max index
        i += 1
    print(sandwich_orders)
    finished_sandwiches = []
    for sandwich in sandwich_orders:
        finished_sandwiches.append(sandwich)
        print(f"I made your {sandwich} sandwich")



favorite_number()
int_tuple()
my_list()
my_float()
my_forloop()
my_whileloop()
pizza_toppings()
print("Unrestricted movie")
cinema_tickets()
print("Restricted movie")
cinema_tickets(True)
sandwich_order()