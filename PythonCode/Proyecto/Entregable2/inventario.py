inventario = {
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
    productos = inventario['departamentos'][departamento]['productos']
    for producto in productos:
        print("*****************************")
        print(f"Nombre del Producto {producto['nombre']} ")
        print(f"Cantidad disponible {producto['cantidad']} ")
        print(f"Color del Producto {producto['color']} ")
        print("*****************************")
        
#consultar_productos('caballeros')
