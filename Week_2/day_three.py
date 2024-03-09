# Dicts


def exercise_one():
    keys = ['Ten', 'Twenty', 'Thirty']
    values = [10, 20, 30]
    new_dict = zip(keys, values)
    print(list(new_dict))


def exercise_two():
    family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

    for key, value in family.items():
        if value < 3:
            print(f"{key} has to pay nothing")
        if 3 <= value <= 12:
            print(f"{key} has to pay $10")
        if value > 12:
            print(f"{key} has to pay $15")


def exercise_three():
    brand = dict(name="Zara", creation_date=1975, creator_name="Amancio Ortega Gaona",
                    type_of_clothes=["men", "women", "children", "home"],
                    international_competitors=["Gap", "H&M", "Benetton"],
                    number_stores=7000,
                    major_color=dict(France="blue", Spain="red", US=["pink", "green"]))
    brand["number_stores"] = 2
    print("Zaras competitors are", brand["international_competitors"])
    brand["country_creation"] = "Spain"

    if "international_competitors" in brand.keys():
        brand["international_competitors"].append("Desigual")

    del brand["creation_date"]
    print("Last int competitor is ", brand["international_competitors"][-1])
    print("US colors", brand["major_color"]["US"])
    print(len(brand))
    print(brand.keys())
    more_on_zara = dict(creation_date=1975, number_stores=10000)
    brand.update(more_on_zara)
    print(brand["number_stores"])
    #  wow its 10.000 now.


def exercise_four():
    users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
    i = 0
    new_users = dict()
    reverse_users = dict()
    users_i = dict()
    users_mp = dict()

    for char in users:
        if "i" in char:
            users_i[char] = i
        if char[0].upper() == "M" or char[0] == "P":
            users_mp[char] = i
        new_users[char] = i
        i += 1
    print(new_users)
    i = 0

    for char in users:
        reverse_users[i] = char
        i += 1
    print(reverse_users)

    sorted_users = sorted(new_users.items())
    print(dict(sorted_users))
    print(users_i)
    print(users_mp)


exercise_one()
exercise_two()
exercise_three()
exercise_four()
