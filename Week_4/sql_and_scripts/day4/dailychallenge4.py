# v1 from restcountries import RestCountryApi as rapi
from restcountries import RestCountryApiV2 as rapi
import random
import psycopg2

random_euro_countries = rapi.get_countries_by_region("Europe")
ten_countries = random.sample(random_euro_countries, 10)

HOSTNAME = 'localhost'
USERNAME = 'dvd'
PASSWORD = ''
DATABASE = 'exercise_one_dayfour'
connection = psycopg2.connect(host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
cursor = connection.cursor()

for country in ten_countries:
    insert_query = "INSERT INTO public.countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)"
    values = (country.name, country.capital, country.flag, country.subregion, country.population)
    cursor.execute(insert_query, values)


connection.commit()