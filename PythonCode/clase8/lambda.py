#Las funciones tienen mucho mas caracteristicas que las variables
#Estas funciones se definen en una linea y el codigo a ejecutar suele ser pequeno
#def dividir(x,y):
 #   return x/y

#print(dividir(6,2))

dividir = lambda x,y: x/y
print(dividir(6,2))

print((lambda x,y: x/y) (6,2))

def saludar(nombre):
    print(f"Hola {nombre}")
    
saludar("Gabriel")

hola = saludar

hola("Alejandro")


promedio = lambda seq: sum(seq) / len(seq)
total = lambda seq: sum(seq)
top = lambda seq: max(seq)


lista = [1,2,3,4,5,6,7,8,9]

print(promedio(lista))

print(total(lista))

print(top(lista))


operaciones = {
    'promedio': promedio,
    'total': total,
    'top': top
}

estudiantes= [
    {
        'nombre': 'Maria',
        'notas': [100,50,75,80]
    },
    {
        'nombre': 'Josue',
        'notas': [98,80,55,88]
    },
    {
        'nombre': 'Juan',
        'notas': [90,90,80,90]
    }
]


for estudiante in estudiantes:
    nombre = estudiante['nombre']
    notas = estudiante['notas']
    
    operacion = input('Digite una operacion (promedio/total/top)')
    
    funcion_operacion = operaciones[operacion]
    
    print(f"Se le esta aplicando la operacion {operacion} al estudiante {nombre} y el resultado es: {funcion_operacion(notas)}")
