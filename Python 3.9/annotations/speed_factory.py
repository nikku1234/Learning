# annotations/speed_both.py
from typing import Annotated

class AnnotationFactory:
    def __init__(self, type_hint):
        self.type_hint = type_hint

    def __getitem__(self, key):
        if isinstance(key, tuple):
            return Annotated[(self.type_hint, ) + key]

        return Annotated[self.type_hint, key]

    def __repr__(self):
        return f"{self.__class__.__name__}({self.type_hint})"

FPS_TO_MPH = 3600 / 5280

Float = AnnotationFactory(float)

def speed(distance:Float["feet"], time:Float["seconds"]) -> Float["MPH"]:
    return distance / time * FPS_TO_MPH
