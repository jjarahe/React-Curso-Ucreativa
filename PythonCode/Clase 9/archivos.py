import json
#from utils import leer, escribir


def leer(nombre_archivo):
    with open(f"{nombre_archivo}.json", "r") as archivo:
        return json.load(archivo)


def escribir(nombre_archivo, diccionario):
    with open(f"{nombre_archivo}.json", "w") as nombre_archivo:
        archivo.write(json.dumps(diccionario))
        
        

inventario_default = {
    'nombre': 'Tienda SImon',
    'Sede': 'Escazu',
    'departamentos': {
        'damas': {
            'productos':[]
        },
        'caballeros': {
            'productos':[]
        },
        'ninos': {
            'productos':[]
        }
    }
}

try:
   inventario = leer('inventario.json')
except FileNotFoundError:
    inventario = inventario_default

def ingresar_producto(departamento):
    productos = inventario['departamentos'][departamento]['productos']
    print('Digite los datos del producto:')
    productos.append({
       'codigo': int(input('Codigo: ')),
       'nombre': input('Nombre: '),
       'cantidad': int(input('Cantidad: ')),
       'precio': float(input('Precio: '))
    })

for _ in range(2):
    ingresar_producto('damas')
    ingresar_producto('caballeros')
    ingresar_producto('ninos')

escribir('inventario', inventario)
#print(invventario)
