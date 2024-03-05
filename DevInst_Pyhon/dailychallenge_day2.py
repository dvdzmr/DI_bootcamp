# exercise 1


def challenge_one(length, number):
    i = 0
    number_list = [number]
    while i < length:
        number_list.append(number_list[i]*2)
        i += 1
    print(number_list)


challenge_one(5, 10)


# exercise 2

def challenge_two(userstring):
    lastchar = ""
    emptystring = ""
    for char in userstring:
        if char != lastchar:
            lastchar = char
            emptystring += char
    print((emptystring))

challenge_two("Hello")


