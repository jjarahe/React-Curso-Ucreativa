def dividir(dividendo, divisor):
    if divisor == 0:
        raise ValueError('No es posible dividir entre cero')
    return dividendo/divisor
    
def multiplicar(*args):
    if len(args) == 0:
        raise ValueError('Se necesita al menos un numero para realizar la multiplicacion')
    
    result = 1
    
    for arg in args:
        result *= arg
    
    return result
