import re, os

class Text():

    def __init__(self, text):
        if type(text) is list:
            # text = " ".join(str(new_text) for new_text in text)
            newtext = ''.join(text)
            self.text = newtext
        else:
            self.text = text

    @classmethod
    def from_file(self, path):
        with open(path, 'r') as f:
            text = f.readlines()
            
        instance = Text(text)
        return instance
            


    def word_frequency(self):
        counter = self.__words_counter()
        wordcount = 0
        for value in counter.values():
            wordcount += value
        if wordcount > 0:
            return f"We have {wordcount} words!"
        return None
    
    def __words_counter(self):
        counter = re.split('[,. ]', self.text)
        counter = list(filter(None, counter))
        word_frequency = {}
        for word in counter:
            word_frequency[word] = counter.count(word)
        return word_frequency

    def most_common(self):
        word_frequency = self.__words_counter()
        most_common = max(word_frequency, key=word_frequency.get)
        return f"The most common word is: {most_common}"

    def all_unique(self):
        word_frequency = self.__words_counter()
        all_unique_words = ""
        for key,value in word_frequency.items():
            all_unique_words += f"{key} appears {value} time(s)\n"
        return all_unique_words


my_text = Text("Hello, my name is David.my hobbies are fishing and gaming.")


print(my_text.word_frequency())
print(my_text.most_common())
print(my_text.all_unique())
project_dir = os.path.dirname(__file__)
your_text = Text.from_file(f"{project_dir}/the_stranger.txt")

print(your_text.word_frequency())
print(your_text.most_common())
print(your_text.all_unique())