amigos = [
    {
        'nombre': 'Pablo',
        'profesion': 'Ingeniero'
    },
     {
        'nombre': 'Maria',
        'profesion': 'Disenadora'
    },
     {
        'nombre': 'Esteban',
        'profesion': 'Ingeniero'
     } 
]

def buscar(nombre):
    for amigo in amigos:
        if amigo['nombre'] == nombre:
            return amigo
    
    return None


amigo = buscar('Pablo')


def buscar(nombre):
    for (index, amigo) in enumerate(amigos):
        if amigo['nombre'] == nombre:
            return index
    
    return None

#Actualizar
#index = buscar('Esteban')
index = buscar(input("Digite el nombre de la persona que desea actualizar"))
print(index)

nombre = input('Digite su nombre')
profesion = input('Digite su profesion')

amigos[index]['nombre'] = nombre
amigos[index]['profesion'] = profesion

print(amigos)

#eliminar
index = buscar(input("Digite el nombre de la persona que desea eliminar"))

amigos.pop(index)

print(amigos)
