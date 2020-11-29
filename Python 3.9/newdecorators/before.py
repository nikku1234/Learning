# newdecorators.before.py
from volume import normal, shout

@normal
def first():
    return "It was the best of times,"

@shout
def second():
    return "it was the worst of times,"
