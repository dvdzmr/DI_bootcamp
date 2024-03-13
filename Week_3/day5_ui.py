# anagrams.py
import os
from day5_class import AnagramChecker




def main():
    active = True
    project_dir = os.path.dirname(__file__)
    with open(f"{project_dir}/sowpods.txt", 'r') as f:
            text = f.read().splitlines()
    anagram_check = AnagramChecker(text)
    while active:
        print("******************\nWelcome to the Anagram menu\n\nPlease Input a word without spaces\n******************")
        user_word = anagram_check.is_valid_word()
        anagrams = anagram_check.get_anagrams(user_word)
        anagrams_to_string = ','.join(anagrams)
        if len(anagrams_to_string) > 1:
            print(f"Your word:{user_word}\nThis is a valid english word.\nAnagrams for your word: {anagrams_to_string}")
            print("\n\nDo you want to enter a new word or exit? (press Q to exit, any other key to continue)")
        else:
            print("Your word did not return any anagrams. Please try again.")
        prompt = input()
        if prompt.upper() == "Q":
             active = False
    print("Thank you for playing.")
    exit(0)

main()