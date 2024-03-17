# Answer the following questions

#     What is a class?
# Framework to allow OOP 
#     What is an instance?
# a class that is called and active
#     What is encapsulation?
# cornering off / restricting code access 
#     What is abstraction?
# hiding irrelevant data
#     What is inheritance?
# sharing qualities between classes
#     What is multiple inheritance?
# getting qualities from multiple parents
#     What is polymorphism?
# sharing qualities to multiple children
#     What is method resolution order or MRO?
# dictates the order by which a language looks for methods in a class

import random

class Card():
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

    def showcard(self):
        print(f"{self.suit} {self.value}")


class Deck():
    def __init__(self):
        self.values = ("A","2","3","4","5","6","7","8","9","10","J","Q","K")
        self.suits = ("Hearts", "Diamonds", "Clubs", "Spades")
        self.collection = []

        for suit in self.suits:
            for value in self.values:
                self.collection.append(Card(value, suit))
        

    def shuffle(self):
        random.shuffle(self.collection)
        #print(self.collection)

    def deal(self):
        choice = random.choice(self.collection)
        choice.showcard()


playing_cards = Deck()
playing_cards.shuffle()
playing_cards.deal()
