#Esto es un comentario
print('Hola Clase')

'''
Papaya
Papaya
Papaya
'''

#Utilizo comillas dobles cuando necesito imprimir apostofres
print("McDonald's")

#Variables numericas
numero = 10

print(numero)

print(type(numero))

numero_decimal = 10.2

print(numero_decimal)
print(type(numero_decimal))

# No se usa camel case, se usa snake case
resultado_con_decimales = 5/3
print(resultado_con_decimales)

resultado_redondeado= round(resultado_con_decimales,2)
print(resultado_redondeado)

resultado_sin_decimales = 5//3
print(resultado_sin_decimales)

numero_modular = 6 % 3
print(numero_modular)


#Strings en Python
nombre = 'Juan'
apellido = 'Jara'
edad = 28
print(nombre + " " + apellido)

#F Strings
print(f"{nombre} {apellido}")


print(f"{nombre} {apellido} edad: {edad}")

print(nombre + nombre)
print(nombre*5)

es_juan = nombre === 'Juan'

print(f"")
