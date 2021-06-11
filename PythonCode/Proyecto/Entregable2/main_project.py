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
# Return {Boolean}
##
def menu_departamentos():
    menu_cabecera()
    print("Seleccione un departamento:")
    terminal_menu = TerminalMenu(['Damas','Caballeros', 'Ninos', 'Salir'])
    menu_departamentos_entry_index = terminal_menu.show()
    print(menu_departamentos_entry_index)
    print()
    
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
            return True
    print("______________________________________\n")
    print("\n\nNo hay usuario registrado con estos valores\nPrograma terminado!")
    input()
    return False

##
# Datos de la portada.
#
# Return {void}
## 
def menu_portada():
    print("______________________________________\n")
    print("     Bienvenido a Tiendas Simon")
    print("______________________________________\n")
    
    print("Estudiante: Juan Luis Jara Herrera")
    print("Cedula:     402180615")
    print("______________________________________\n")
 
 ##
# Datos del menu principal.
#
# Return {void}
##
def menu_principal():
    menu_cabecera()
    print("Opciones disponibles:")
    terminal_menu = TerminalMenu(["Inventario", "Salir"])
    menu_principal_entry_index = terminal_menu.show()
    print(menu_principal_entry_index)
    print()

##
# Acciones realizables con los productos del departamento.
# Parameters {String, String}
# Return {void}
##
def menu_productos_departamento_admin(nombre_departamento):
    menu_cabecera()
    print(f"Menu de productos del departamento {nombre_departamento}:")
    terminal_menu = TerminalMenu(["Consultar", "Ingresar", "Actualizar", "Eliminar", "Volver", "Salir"])
    menu_productos_depart_admin_entry_index = terminal_menu.show()
    print(menu_productos_depart_admin_entry_index)
    print()    

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


##
# Menu de acciones.
#
# Return {void}
##
def main():
    limpiarConsola()
    menu_portada()
    if menu_login() != True:
        exit()
    while True:
        try:
            menu_principal()
            
            entrada_usuario = int(input("Seleccione una opcion: "))

            if entrada_usuario in range(3):
                
                if entrada_usuario == 2:
                    print("Saliendo del sistema de inventarios!!!")
                    break
                print()
                
                if entrada_usuario == 1:
                    while True:
                        menu_departamentos()
                        entrada_usuario = int(input("Seleccione un departamento: "))
                        
                        if entrada_usuario in range(5):
                            
                            if entrada_usuario == 1:
                                menu_productos_departamento("Damas",active_session_info[0]['role'])
                                
                                entrada_menu_productos = int(input("Seleccione una accion: "))
                                
                                if entrada_menu_productos in range(7):
                                    
                                    if entrada_menu_productos == 1:
                                        print("Consulta de Productos")
                                        input()
                                        
                                    if active_session_info[0]['role'] == "admin":
                                        if entrada_menu_productos == 2:
                                            print("Ingrese el Producto")
                                            input()
                                            
                                            
                                        if entrada_menu_productos == 3:
                                            print("Actualizar el Producto")
                                            input()
                                            
                                        if entrada_menu_productos == 4:
                                            print("Elimine el Producto")
                                            input()
                                        
                                    if entrada_menu_productos == 6:
                                        print("\nSaliendo del sistema de inventarios!!!")
                                        exit()

                            if entrada_usuario == 2:
                                menu_productos_departamento("Caballeros",active_session_info[0]['role'])
                                
                                entrada_menu_productos = int(input("Seleccione una accion: "))
                                
                                if entrada_menu_productos in range(7):
                                    
                                    if entrada_menu_productos == 1:
                                        print("Consulta de Productos")
                                        input()
                                    if active_session_info[0]['role'] == "admin":  
                                        if entrada_menu_productos == 2:
                                            print("Ingrese el Producto")
                                            input()
                                            
                                        if entrada_menu_productos == 3:
                                            print("Actualizar el Producto")
                                            input()
                                            
                                        if entrada_menu_productos == 4:
                                            print("Elimine el Producto")
                                            input()
                                        
                                    if entrada_menu_productos == 6:
                                        print("\nSaliendo del sistema de inventarios!!!")
                                        exit()
                                
                            if entrada_usuario == 3:
                                menu_productos_departamento("Ninos",active_session_info[0]['role'])
                                
                                entrada_menu_productos = int(input("Seleccione una accion: "))
                                
                                if entrada_menu_productos in range(7):
                                    if entrada_menu_productos == 1:
                                        print("Consulta de Productos")
                                        input()
                                    if active_session_info[0]['role'] == "admin":   
                                        if entrada_menu_productos == 2:
                                            print("Ingrese el Producto")
                                            input()
                                            
                                        if entrada_menu_productos == 3:
                                            print("Actualizar el Producto")
                                            input()
                                            
                                        if entrada_menu_productos == 4:
                                            print("Elimine el Producto")
                                            input()
                                        
                                    if entrada_menu_productos == 6:
                                        print("\nSaliendo del sistema de inventarios!!!")
                                        exit()

                            if entrada_usuario == 4:
                                print("\nSaliendo del sistema de inventarios!!!")
                                exit()
                #print("Usted eligió la opcion {} !\n".format(entrada_usuario))
            else:
                print('Error, solo de aceptan numeros del 1 al 2')
            
            input()
            limpiarConsola()
       
        except ValueError:
            print("Error, ingrese solamente numeros")



if __name__ == "__main__":
    main()
