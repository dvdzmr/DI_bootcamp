from exercise_one import MenuItem, MenuManager

item = None


def show_user_menu():
    while True:
        print("View an Item (V)")
        print("Add an Item (A)")
        print("Delete an Item (D)")
        print("Update an Item (U)")
        print("Show the Menu (S)")
        print("If this is the first time launching please add an item first.")
        inp = input("Enter your choice: ")
        global item

        if inp.upper() == "A":
            print("Input the item's name and price")
            name = input("name")
            price = input("price")
            item = add_item_to_menu(name, price)
        elif inp.upper() == "V":
            name = input("Input item name")
            show_specific_restaurant_menu(name)
        elif inp.upper() == "D":
            name = input("Input item name")
            remove_item_from_menu(name)
        elif inp.upper() == "U":
            name = input("name")
            price = input("price")
            update_item_from_menu(name, price)
        elif inp.upper() == "S":
            show_restaurant_menu()
        else:
            pass


def add_item_to_menu(name, price):
    try:
        my_item = MenuItem(name, price)
        my_item.save()
    except Exception as e:
        print(f"Error {e}")
        exit()

    print("Successfully added the item")
    return my_item


def remove_item_from_menu(name):
    try:
        item.delete(name)
        item.save()
    except Exception as e:
        print(f"Error {e}")
        exit()

    print("Successfully added the item")


def update_item_from_menu(name, price):
    try:
        item.update(name, price)
        item.save()
    except Exception as e:
        print(f"Error {e}")
        exit()
    print("Successfully added the item")


def show_restaurant_menu():
    my_menu = MenuManager()
    result = my_menu.all()
    for my_item in result:
        print(my_item)


def show_specific_restaurant_menu(name):
    my_menu = MenuManager()
    result = my_menu.get_by_name(name)
    for my_item in result:
        print(my_item)


show_user_menu()
