from day2 import Dog 
import random

class PetDog(Dog):
    def __init__(self, name, age, trained=False):
        self.trained = trained
        self.name = name
        self.age = age
    

    def train(self):
        self.bark()
        self.trained = True
    
    def play(self, *args):
        dog_names = ""
        for dogs in args:
            dog_names += f"{dogs.name} "
        
        print(f"{dog_names}all play together")


    def do_a_trick(self):
        opt1 = f"{self.name} does a barrel roll"
        opt2 = f"{self.name} stands on his back legs"
        opt3 = f"{self.name} shakes your hand"
        opt4 = f"{self.name} plays dead"
        choice = random.sample([opt1, opt2, opt3, opt4], 1)
        print(choice[0])




class Family():
    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name


    def born(self, *children):
        for child in children:
            self.members.append({'name': child,'age':0})

    def is_18(self, name):
        for item in self.members:
            if item['name'] == name:
                if item['age'] >= 18:
                    item['is_child'] = False
                else:
                    item['is_child'] = True
        
    
    def family_presentation(self):
        print(f"{self.last_name}'s family.")
        for item in self.members:
            print(item['name'])




class TheIncredibles(Family):

    def __init__(self, members, last_name):
        self.members = members
        self.last_name = last_name


    def incredible_presentation(self):
        print(f"Here is our powerful family {self.last_name}")
        super().family_presentation()


    def born(self, name, power):
        super().born(name)
        for item in self.members:
            if item['name'] == name:
                item['power'] = power
                print(item)

            

dog_1 = PetDog("John", 50, 4)
dog_2 = PetDog("Peter", 29, 10)
dog_3 = PetDog("Benjamin Netanyahu", 5, 2)
dog_1.play(dog_1, dog_2, dog_3)
dog_2.do_a_trick()

john = Family([dict(name="John", age=5)], "Johnsons")
john.born("Sally")
john.family_presentation()
john.is_18("Sally")
john.family_presentation()

parr = TheIncredibles([dict(name="Edna", power="Disguise", incredible_name="E Mode"),
                       {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'}, 
                       {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}], "Parr")



parr.family_presentation()
parr.born("Jack", "Unknown")