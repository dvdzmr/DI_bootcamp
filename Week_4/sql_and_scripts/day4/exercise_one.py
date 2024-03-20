import psycopg2, random


class MenuItem:

    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.id = random.randint(1, 100)

        HOSTNAME = 'localhost'
        USERNAME = 'dvd'
        PASSWORD = ''
        DATABASE = 'exercise_one_dayfour'
        self.connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
        self.cursor = self.connection.cursor()
        insert_query = "INSERT INTO public.menu_items (item_name, item_price, item_id) VALUES (%s, %s, %s)"
        values = (self.name, self.price, self.id)
        self.cursor.execute(insert_query, values)

    def save(self):
        self.connection.commit()

    def delete(self, name=None):
        if name is not None:
            delete_query = f"DELETE FROM public.menu_items WHERE item_name = '{name}';"
        else:
            delete_query = f"DELETE FROM public.menu_items WHERE item_name = '{self.name}';"
        self.cursor.execute(delete_query)

    def update(self, newname, newprice):
        update_query = f"UPDATE public.menu_items SET item_price={newprice}, item_name='{newname}' WHERE item_id = '{self.id}';"
        self.cursor.execute(update_query)
        self.connection.commit()

    def close(self):
        self.connection.close()

class MenuManager:
    def __init__(self):
        HOSTNAME = 'localhost'
        USERNAME = 'dvd'
        PASSWORD = ''
        DATABASE = 'exercise_one_dayfour'
        self.connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
        self.cursor = self.connection.cursor()

    def get_by_name(self, name):
        select_query = f"SELECT * FROM public.menu_items WHERE item_name = '{name}';"
        self.cursor.execute(select_query)
        return self.cursor.fetchall()


    def all(self):
        select_query = f"SELECT * FROM public.menu_items;"
        self.cursor.execute(select_query)
        return self.cursor.fetchall()


# Test case
# item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.save()
# item.close()
#
# another_item = MenuItem('AnotherBurger', 35)
# another_item.save()
# another_item.update('Veggie Burger', 37)
# another_item.save()
# another_item.close()
#
# item2 = MenuManager()
# result = item2.get_by_name('Beef Stew')
# print(result)
# result = item2.all()
# print(result)


