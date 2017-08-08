def alphabetEncryption(s):
    key = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    result = ""
    for char in s:
        if char in key:
            result+=key[(len(key)) - (key.index(char) + 1)]
        else:
            result+=char
    return result
