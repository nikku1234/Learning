# annotations/speed_types.py

FPS_TO_MPH = 3600 / 5280

def speed(distance:float, time:float) -> float:
    return distance / time * FPS_TO_MPH
