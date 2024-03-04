
matrix ="7ii\tTsx\th%?\ti #\tsM\t$a\t#t%\t^r!" 
# I added /t to simulate the tabs in the original string provided, if i were reading from file it would work normally.




def unwrap_matrix(string):
    matrix_list = string.split("\t")
    column_a, column_b, column_c = [], [], []
    
    for char in matrix_list: # this is kinda hardcoded to a width of 3 columns but i coulndt figure out a better solution.
        i = 0
        for letter in char:
            if letter.isalpha():
                if i == 0:
                    column_a.append(letter)
                if i == 1:
                    column_b.append(letter)
                if i == 2:
                    column_c.append(letter)
            i += 1

    result = column_a + column_b + column_c
    print(result)
    

unwrap_matrix(matrix)