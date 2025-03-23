import random
x = random.randint(1, 100)
print(x)

y = 0

while True:
    y = int(input("Please enter a number: "))
    if x == y:
        print("You guessed it!")
        break
    elif x > y:
        print("Too small!")
    else:
        print("Too big!")
    y += 1
