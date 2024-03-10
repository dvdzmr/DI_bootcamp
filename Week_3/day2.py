class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f"{self.name} is barking")
    
    def run_speed(self):
        print(f"Running speed is {(self.weight/self.age)*10}")
    

    def fight(self, other_dog):
        my_dog = ((self.weight/self.age *10) * self.weight)
        other_one = ((other_dog.weight/other_dog.age *10) * other_dog.weight)
        
        if  my_dog > other_one:
            print(f"{self.name} dog is stronger")
        else:
            print(f"{other_dog.name} is stronger")



all_cats = [Bengal("Bengal", 5), Chartreux("Charty", 3), Siamese("5000$cat", 10)]

sara_pets = Pets(all_cats)

sara_pets.walk()

dog_1 = Dog("John", 50, 4)
dog_2 = Dog("Peter", 29, 10)
dog_3 = Dog("Benjamin Netanyahu", 5, 2)

dog_1.bark()
dog_2.run_speed()
dog_3.fight(dog_2)