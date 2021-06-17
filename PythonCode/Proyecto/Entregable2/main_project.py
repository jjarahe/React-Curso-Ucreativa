import os
from simple_term_menu import TerminalMenu
import profile
import inventario


active_session_info= [
    {
        'name': '',
        'role': '',
        'department': ''
    }
]


departamentos = ['damas', 'caballeros', 'ninos']

##
# Datos de la cabecera del menu.
#
# Return {Boolean}
##
def menu_cabecera():
    limpiarConsola()
    print("______________________________________________________________\n")
    print("Bienvenido al sistema de inventarios de tienda Simon,")
    print(f"{ active_session_info[0]['name']} es un placer atenderle")
    print("______________________________________________________________\n")
    print()

##
# Categorias departamentales.
#
# Return {Integer}
##
def menu_departamentos():
    menu_cabecera()
    print("Seleccione un departamento:")
    terminal_menu = TerminalMenu(['Damas','Caballeros', 'Ninos', 'Salir'])
    menu_departamentos_entry_index = terminal_menu.show()
    
    if menu_departamentos_entry_index == 3:
        salir_sistema()
        exit()
        
    return menu_departamentos_entry_index

    
##
# Ingreso de usuarios.
#
# Return {Boolean}
##
def menu_login():
    print("Ingreso de usuario")
    username = input("Usuario => ")
    password = input("Contrasena => ")

    for user in profile.users:
        if username == user['username'] and password == user['password']:
            active_session_info[0]['name'] = user['full_name']
            active_session_info[0]['role'] = user['role']
            limpiarConsola()
            return
    print("_____________________________________________\n")
    print("\n\nNo hay usuario registrado con estos valores\nPrograma terminado!")
    input()
    exit()

##
# Datos de la portada.
#
# Return {void}
## 
def menu_portada():
    limpiarConsola()
    print("______________________________________\n")
    print("     Bienvenido a Tiendas Simon")
    print("______________________________________\n")
    
    print("Estudiante: Juan Luis Jara Herrera")
    print("Cedula:     402180615")
    print("______________________________________\n")
 
 ##
# Datos del menu principal.
#
# Return {Integer}
##
def menu_inventario():
    menu_cabecera()
    print("Opciones disponibles:")
    terminal_menu = TerminalMenu(["Inventario", "Salir"])
    menu_principal_entry_index = terminal_menu.show()
    
    if menu_principal_entry_index == 1:
        salir_sistema()
        exit()

    

##
# Acciones realizables con los productos del departamento para Admin.
# Parameters {String}
# Return {Integer}
##
def menu_productos_departamento_admin(nombre_departamento):
    menu_cabecera()
    print(f"Menu de productos del departamento {nombre_departamento.capitalize()}:")
    terminal_menu = TerminalMenu(["Consultar", "Ingresar", "Actualizar", "Eliminar", "Volver", "Salir"])
    menu_productos_depart_admin_entry_index = terminal_menu.show()
    
    if menu_productos_depart_admin_entry_index == 5:
       salir_sistema()
       exit()
       
    return menu_productos_depart_admin_entry_index
 
 ##
# Acciones realizables con los productos del departamento para Invitado.
# Parameters {String}
# Return {Integer}
##
def menu_productos_departamento_guest(nombre_departamento):
    menu_cabecera()
    print(f"Menu de productos del departamento {nombre_departamento}:")
    terminal_menu = TerminalMenu(["Consultar", "Volver", "Salir"])
    menu_productos_depart_admin_entry_index = terminal_menu.show()
    
    if menu_productos_depart_admin_entry_index == 2:
        salir_sistema()
        exit()
        
    return menu_productos_depart_admin_entry_index

def salir_sistema():
    limpiarConsola()
    print("_____________________________________________\n")
    print("Saliendo del sistema de inventarios!!!")
    print("_____________________________________________\n")
    

##
# Consultar productos.
#
# Return {void}
##
def consultar_productos(departamento):
    productos = inventario.inventario['departamentos'][departamento]['productos']
    
    print("______________________________________________________________\n")
    print(f"Consulta de productos del departamento {departamento.capitalize()}")
    print("______________________________________________________________\n")
    
    if len(productos) > 0:
        for producto in productos:
            print("*****************************")
            print(f"Codigo: {producto['codigo']} ")
            print(f"Nombre: {producto['nombre']} ")
            print(f"Precio: {producto['precio']} ")
            print(f"Cantidad disponible: {producto['cantidad']}")
            print(f"*****************************\n")
    else:
        print(f"No hay productos disponibles en este departamento!!")
    input()

##
# Ingresar producto.
#
# Return {void}
##
def ingresar_producto(departamento):
    try:
        print(f"Datos del Producto: \n")
        codigo = int(input("Codigo: "))
        nombre = str(input("Nombre: "))
        precio = float(input("Precio: "))
        cantidad = int(input("Cantidad: "))
        
        producto = {
            'codigo': codigo,
            'nombre': nombre,
            'precio': precio,
            'cantidad': cantidad
        }
        
        inventario.inventario['departamentos'][departamento]['productos'].append(producto)
        
    except ValueError:
        print("Se ingreso un valor no esperado, por favor intentelo de nuevo")
        input()
        ingresar_producto(departamento)
   

##
# Actualizar producto.
#
# Return {void}
##
def actualizar_producto():
    print("Actualice el producto")
    input()

##
# Eliminar producto.
#
# Return {void}
##
def eliminar_producto():
    print("Eliminar el producto")
    input()
##
# Limpia la consola de Windows y MAC OS.
#
# Return {void}
##
def limpiarConsola():
    if os.name == "posix" or os.name == "mac":
        os.system("clear")
    elif os.name == "ce" or os.name == "dos" or os.name == "nt":
        os.system("cls")

def menu_opciones_manager(posicion):
    opcion_menu_departamentos = None
    
    departamento = departamentos[posicion]
    
    while opcion_menu_departamentos != 4:
        opcion_menu_departamentos = menu_productos_departamento_admin(departamento)
        if opcion_menu_departamentos == 0:
            consultar_productos(departamento)
        if opcion_menu_departamentos == 1:
            ingresar_producto(departamento)
        if opcion_menu_departamentos == 2:
            actualizar_producto()
        if opcion_menu_departamentos == 3:
            eliminar_producto()


def menu_opciones_guest(departamento):
    opcion_menu_departamentos = None
    
    while opcion_menu_departamentos != 1:
        opcion_menu_departamentos = menu_productos_departamento_guest(departamentos[departamento])
        if opcion_menu_departamentos == 0:
            consultar_productos()
##
# Menu de acciones.
#
# Return {void}
##
def main():
    menu_portada()
    menu_login()
    menu_inventario()
    while True:
        opcion_departamento = menu_departamentos()
          
        if active_session_info[0]['role'] == "admin":
            menu_opciones_manager(opcion_departamento)
            
        if active_session_info[0]['role'] == "guest":
            menu_opciones_guest(opcion_departamento)
                
if __name__ == "__main__":
    main()
