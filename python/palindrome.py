
def palindrome(word):
    if isinstance(word, int) == True:
        word = str(word)
    to_array = list(word)
    reverse_array = to_array.reverse()
   

    alter_word = filter(lambda char: char.isalnum(), to_array)
    x = list(alter_word)
 

    if ''.join(x).lower() == ''.join(x).lower()[::-1]:
        return True
    return False
    
