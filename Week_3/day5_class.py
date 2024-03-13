# anagram_checker.py

class AnagramChecker():

    #Note: None of the methods in the class should print anything.
    def __init__(self, words):
        self.words = words
    
    def is_valid_word(self):
        input_valid = False
        while input_valid is False: 
            user_input = input()
            forbidden = [" ", "1","2","3","4","5","6","7","8","9","0"]
            if any(char in user_input for char in forbidden):
                print("ERROR: Please enter a single word without spaces, and without numbers.")
            else:
                input_valid = True
        return user_input

    def get_anagrams(self, user_word):
        anagram_list = []
        for word in self.words:
            # Put the words in alphabetical order
            if(sorted(word)== sorted(user_word.upper())):
                anagram_list.append(word)
        
        return anagram_list

