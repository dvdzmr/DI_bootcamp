from math import pi


class Circle():
    def __init__(self, radius = None, diameter = None):
        self.radius = radius
        self.diameter = diameter
        if self.radius is None:
            self.radius = diameter // 2
        if self.diameter is None:
            self.diameter is radius ** 2

    
    def area(self):
        return pi * self.radius ** 2
    
    def __str__(self):
        circlearea = self.area()
        return (f"The Diameter of the circle is {self.diameter} and the radius is {self.radius}. The area is {circlearea}")


    def __add__(self, other):
        self.radius += other.radius
        self.diameter += other.diameter
        return

    def __gt__(self, other):
        if self.radius > other.radius:
            return True
        
        return False

    def __eq__(self, other):
        if self.radius == other.radius:
            return True
        return False
    



my_circle = Circle(diameter=10)
your_circle = Circle(diameter=20)
another_circle = Circle(diameter=10)
the_same_circle = Circle(diameter=10)

print(str(my_circle))
my_circle+your_circle
print(str(my_circle))


print("my > yours", my_circle>your_circle)
print("yours > my", your_circle>my_circle)
print("thesame == another", the_same_circle==another_circle)
print("my == yours", my_circle==your_circle)

my_list = []
my_list.append(Circle(radius=100))
print(my_circle)