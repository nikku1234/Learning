# newdecorators.volume.py
import functools

def normal(func):
    return func

def shout(func):
    @functools.wraps(func)
    def shout_decorator(*args, **kwargs):
        return func(*args, **kwargs).upper()

    return shout_decorator
