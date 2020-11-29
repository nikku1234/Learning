# newdecorators.decorator_exp.py
from volume import normal, shout

DECORATORS = {
    "normal":normal,
    "shout":shout,
}

voice = input("Choose: ")

@DECORATORS[voice]
def third():
    return "In a hole in the ground there lived a hobbit."
