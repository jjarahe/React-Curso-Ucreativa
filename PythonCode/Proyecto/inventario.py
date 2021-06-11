#ejemplo de diccionario

inventario = {
    'nombre_tienda': 'Tienda Simon',
    'sede': 'Escazu',
    'departamentos': [
        {
            'nombre': 'Damas',
            'productos': [
                {
                    'nombre': 'Blusa',
                    'cantidad': 100,
                    'color': 'negro'
                }
            ]
        },
        {
            'nombre': 'Caballeros',
            'productos': []
        },
        {
            'nombre': 'Ninos',
            'productos': []
        },
    ]
}

def consultar_productos_dep_damas():
    productos = inventario['departamentos'][0]['productos']
    for producto in productos:
        print("*****************************")
        print(f"Nombre del Producto {producto['nombre']} ")
        print(f"Cantidad disponible {producto['cantidad']} ")
        print(f"Color del Producto {producto['color']} ")
        print("*****************************")
consultar_productos_dep_damas()


inventario2 = {
    'nombre_tienda': 'Tienda Simon',
    'sede': 'Escazu',
    'departamentos': {
        'damas':{
            'nombre': 'Damas',
            'productos': [
                {
                    'nombre': 'Blusa',
                    'cantidad': 100,
                    'color': 'negro'
                }
            ]
        },
       'caballeros':{
            'nombre': 'Caballeros',
            'productos': [
                {
                    'nombre': 'Camisa',
                    'cantidad': 100,
                    'color': 'negro'
                }
            ]
        },
        'ninos':{
            'nombre': 'Ninos',
            'productos': [
                {
                    'nombre': 'Chupon',
                    'cantidad': 100,
                    'color': 'blanco'
                }
            ]
        },
    }
}

def consultar_productos(departamento):
    productos = inventario2['departamentos'][departamento]['productos']
    for producto in productos:
        print("*****************************")
        print(f"Nombre del Producto {producto['nombre']} ")
        print(f"Cantidad disponible {producto['cantidad']} ")
        print(f"Color del Producto {producto['color']} ")
        print("*****************************")
        
consultar_productos('caballeros')
