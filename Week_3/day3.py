from func import add_two_numbers
import random, string, datetime, Faker




class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount > 1:
            return(f"{self.amount} {self.currency}s")
        else:
            return(f"{self.amount} {self.currency}")
        
    def __int__(self):
        return self.amount
        
    def __repr__(self):
        return f"{self.__class__.__name__} : {self.amount} {self.currency}"

    def __add__(self, other):
        if self.currency == other.currency:
            return self.amount + other.amount
        else:
            exit(f"Cannot add between different currencies: {self.currency} and {other.currency}")
    
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(c1+c2)
# print(c1+c4)


def randomstr(length):
    letters = string.ascii_lowercase + string.ascii_uppercase
    result = ''.join(random.choice(letters) for i in range(length))
    print(result)

randomstr(5)

def currentdate():
    print(datetime.datetime.now())

currentdate()


def date_delta():
    today = datetime.datetime.now()
    january_first = datetime.datetime(today.year+1, 1, 1)
    delta = january_first - today
    print(f"There is a delta of {delta} between now and January first next year.")

date_delta()

def birthday(date):
    today = datetime.datetime.now()
    difference = (today - date)
    print(f"{int(difference.total_seconds()//60)} minutes")



birthday(datetime.datetime(1996, 12, 6))



users = []
i = 0
while i < 10:
    fake = Faker()
    new_dict = dict(name=fake.name(), address=fake.address())
    # I dont know what 'language_code' is supposed to mean.
    users.append(new_dict)
    i += 1

print(users)