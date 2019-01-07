import sys

end = sys.argv[1]

def sumSquares(count):
  sum = 0
  for x in range(1, int(count) + 1):
    sum += (x * x)
  return sum

def squareSums(count):
  sum = 0
  for x in range(1, int(count) +1):
    sum += x
  return sum * sum

print (squareSums(end) - sumSquares(end))
