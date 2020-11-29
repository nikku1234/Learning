# annotations/speed_both.py
from typing import Annotated

FPS_TO_MPH = 3600 / 5280

Feet = Annotated[float, "feet"]
MPH = Annotated[float, "miles per hour"]

def speed(distance:Feet, time:Annotated[float, "seconds"]) -> MPH:
    return distance / time * FPS_TO_MPH
