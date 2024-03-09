class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof")

    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high")



class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)


class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    
    def get_animals(self):
        print(self.animals)

    def sell_animal(self, animal_sold):
        self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_animals = {}
        nested_list = []
        temp_list = sorted(self.animals)
        i = 0
        while i < len(temp_list):
            if (i+1) != len(temp_list) and temp_list[i][0] == temp_list[i+1][0]:
                nested_list.append(temp_list[i])
            elif temp_list[i][0] == temp_list[i-1][0]:
                nested_list.append(temp_list[i])
            else:
                if len(nested_list) != 0:
                    sorted_animals[i] = nested_list
                    nested_list = []
                else:
                    sorted_animals[i] = temp_list[i]
            i += 1
        
        if len(nested_list) != 0:
                    sorted_animals[len(temp_list)] = nested_list
        else:
            sorted_animals[len(temp_list)] = temp_list[-1]

        self.animalgroups = sorted_animals

    def get_groups(self):
        for value in self.animalgroups.values():
            if isinstance(value, list):
                print(*value)
            else:
                print(value)


# ---------------------------------- #

def oldest_cat(*arg):
    catname = ""
    catage = 0
    for cat in arg:
        if cat.age > catage:
            catage = cat.age
            catname = cat.name
    
    print(f"The oldest cat is {catname}, at age {catage}")



# ---------------------------------- #

cat_one = Cat("KitKat", 15)
cat_two = Cat("Stray #25", 10)
cat_three = Cat("Sniffles", 1)
oldest_cat(cat_one, cat_two, cat_three)

davids_dog = Dog("Rex", 50)
sarahs_dog = Dog("Teacup", 20)

print(f"David's dog is called {davids_dog.name} and is {davids_dog.height} tall")
davids_dog.bark()
davids_dog.jump()
sarahs_dog.jump()
sarahs_dog.bark()

if sarahs_dog.height > davids_dog.height:
    print("Sarah's dog is taller")
elif sarahs_dog.height == davids_dog.height:
    print("Both dogs are the same height")
else:
    print("Davids dog is taller")


stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()

ramat_gan_safari = Zoo("Beersheva Zoo")

ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Aardvark")
ramat_gan_safari.add_animal("Deer")
ramat_gan_safari.add_animal("Dinosaur")
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()