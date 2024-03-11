import os
import random
import json

## This enables just running it from the root folder instead of having to cd to this dir
project_dir = os.path.dirname(__file__)
##


sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


def get_words_from_file():
    wordlist = []
    with open(project_dir+"/sowpods.txt", 'r') as f:
        for line in f:
            wordlist.append(line)

    return wordlist

# I know the assignment says only 1 parameter (length)
# I could also grab `words` from the global stack but this is better practice
def get_random_sentence(length, wordlist): 
    i = 0
    random_words = []
    random_sentence = ""
    while i < length:
        random_words.append(random.choice(wordlist))
        i += 1
    
    for word in random_words:
        random_sentence += f"{word.lower().strip('\n')} "
    return random_sentence
    


def main():
    print("This function makes a random sentence")
    validated = False
    while validated is False:
        result = input("How long do you want the sentence to be?")
        if 20 > int(result) >= 2:
            validated = True
        else:
            print("Invalid input, try again.")

    words = get_words_from_file()
    #print(words)
    ran_words = get_random_sentence(10, words)
    print(ran_words)

    myjson = json.loads(sampleJson)

    print("Salary: ",myjson['company']['employee']['payable']['salary'])
    myjson['company']['employee']['birth_day'] = "1/1/1980"
    print(myjson)
    with open(project_dir+'/bootcamp.json', 'w') as f:
        json.dump(myjson, f, indent=4)
main()