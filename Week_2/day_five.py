row_one, row_two, row_three = [" "," "," "], [" "," "," "],[" "," "," "]


winner = ""

def display_board():
    global row_one, row_two, row_three
    column_one = f"*  {row_one[0]} | {row_one[1]} | {row_one[2]}  *"
    column_two = f"*  {row_two[0]} | {row_two[1]} | {row_two[2]}  *"
    column_three = f"*  {row_three[0]} | {row_three[1]} | {row_three[2]}  *"
    print("************")
    print(column_one)
    print(column_two)
    print(column_three)
    print("************")



def player_input(player):
    global row_one, row_two, row_three
    if player == "player1":
        cursor = "X"
    if player == "player2":
        cursor = "O"
    print("Make your move")
    print("Which column do you want to place?\nColumn 1 2 3")
    player_column = input()  # Im not sanitizing input but it's okay for this sample.
    print("Which row do you want to place?\nRow a b c")
    player_row = input()  # Im not sanitizing input but it's okay for this sample.

    if player_row == "a": # a = first row
        print(row_one[int(player_column)-1])
        if row_one[int(player_column)-1] == " ":
            row_one[int(player_column)-1] = cursor
        else:
             print("This position has already been taken. Try again.")
             display_board()
             player_input(player)

    if player_row == "b": # a = first row
            print(row_two[int(player_column)-1])
            if row_two[int(player_column)-1] == " ":
                row_two[int(player_column)-1] = cursor
            else:
             print("This position has already been taken. Try again.")
             display_board()
             player_input(player)
    if player_row == "c": # a = first row
            print(row_three[int(player_column)-1])
            if row_three[int(player_column)-1] == " ":
                row_three[int(player_column)-1] = cursor
            else:
             print("This position has already been taken. Try again.")
             display_board()
             player_input(player)

    check_win(player)


def check_win(player):
    global winner
    if player == "player1":
        cursor = "X"
    elif player == "player2":
        cursor = "O"

    count = 0

    # Check diagnonal 


    if row_one[0] == cursor and row_two[1] == cursor and row_three[2] == cursor:
        count = 3
    
    if row_one[2] == cursor and row_two[1] == cursor and row_three[0] == cursor:
        count = 3

    # Check vertical

    i = 0

    while i <= 2:
        if row_one[i] == cursor and row_two[i] == cursor and row_three[i] == cursor:
            count = 3
            break
        i += 1
    

    
    # Check rows
    if count == 0:
        for array in [row_one, row_two, row_three]:
            for char in array:
                if count != 3:
                    if char == cursor:
                        count += 1
                    if char != cursor:
                        count = 0
                else:
                    continue
            if count != 3:
                count = 0

    
    if count == 3:
        winner = player

def play():
    global winner
    print("Welcome to Tic Tac Toe")

    while winner == "":
        display_board()
        print("Player 1's turn")
        player_input("player1")
        if winner != "":
            break # break if winner is already found
        display_board()
        print("Player 2's turn")
        player_input("player2")

    display_board()
    print(f"Winner is {winner}!")

    replay = input("Do you want to play again? Y/n")
    if replay == "" or replay == "Y" or replay == "y":
        winner = ""
        # reset list here too
        play()
    else:
        exit()
play()