
class Farm:
    def __init__(self, farm_name):
        self.farm = farm_name
        self.animals = dict()

    def add_animal(self, animal, amount=1):
        self.animals[animal] = amount

    def get_info(self):
        statement = f"{self.farm}'s farm\n"
        for key,value in self.animals.items():
            statement += f"{key} {value}\n"

        statement += " E-I-E-I-0!"
        return statement  # haha get it, a return statement


    def get_animal_types(self):
        self.shortlist = []
        for item in self.animals.keys():
            print(item)
            self.shortlist.append(item)

    def get_short_info(self):
        animals = ""
        i = 0
        while i < len(self.shortlist):
            if (i+1) == len(self.shortlist):
                animals += "and " + self.shortlist[i] + "s"
            else:
                animals += self.shortlist[i] + "s "
            i += 1

        print(f"McDonald’s farm has {animals}")


macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
macdonald.get_animal_types()
macdonald.get_short_info()