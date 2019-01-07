import sys

lastDivide = int(sys.argv[1])
currentNumber = lastDivide + 1

if lastDivide < 1:
    raise Exception('please a number greater than 1')
if lastDivide > 17:
  currentNumber = 10000000

print(range(1, lastDivide + 1))

def multipleCheck(int):
    for x in range(1, lastDivide + 1):
        print(int % x)
        if int % x != 0:
            return False
    return True

while multipleCheck(currentNumber) == False:
    currentNumber += 1

print(currentNumber)
 
