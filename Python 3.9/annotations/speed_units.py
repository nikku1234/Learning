# annotations/speed_units.py

FPS_TO_MPH = 3600 / 5280

def speed(distance:"feet", time:"seconds") -> "miles per hour":
    return distance / time * FPS_TO_MPH
