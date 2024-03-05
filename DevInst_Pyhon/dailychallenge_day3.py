
    # Ask a user for a word

    # Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.
    #     Make sure the letters are the keys.
    #     Make sure the letters are strings.
    #     Make sure the indexes are stored in a list and those lists are values.



def challenge_one(word):
    dict = {}
    i = 0
    for char in word:
        if char in dict.keys():
            dict[char] = dict[char] + [i]
        else:
            dict[char] = [i]
        i += 1


    print(dict)

#challenge_one("hello")


# challenge 2

items_purchase_one = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

items_purchase_two = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

items_purchase_three = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}


def challenge_two(amount):
    im_not_poor = []
    for key,value in items_purchase_one.items():
        new_value = value.replace("$", "")  # There are oneliner ways to do this as well.
        new_new_value = new_value.replace(",", "")  # There are oneliner ways to do this as well.
        if amount > int(new_new_value):  # unsafe casting, but i know the list so its fine.
            im_not_poor.append(key)

    print(im_not_poor)


challenge_two(5)
challenge_two(500)
challenge_two(5000)