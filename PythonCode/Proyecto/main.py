import os
#Funcion para limpiar consola segun OS
def limpiarConsola():
    import os
    if os.name == "posix" or os.name == "mac":
        os.system("clear")
    elif os.name == "ce" or os.name == "dos" or os.name == "nt":
        os.system("cls")

def menu_principal():
    print("________________________")
    print("Bienvenido a Tiendas Simon")
    print("________________________")
    print()
    print("Opciones disponibles:")
    print("1. Inventario")
    print("2. Extraer Dinero")
    print("3. Depositar dinero")
    print("4. Comprar dolares")
    print("0. Salir")
    print()

def menu_login():
    print("Ingreso de usuario")
    usuario = input("Usuario => ")
    password = input("Contrasena => ")
    input()
    limpiarConsola()
    return 1

def menu():
    while True:
        if menu_login() == 1:
            menu_principal()
            try:
                entrada_usuario = int(input("Seleccione una opcion: "))

                if entrada_usuario in range(5):

                    if entrada_usuario == 0:
                        print("Adios! Vuelva pronto")
                        break
                    print()
                    if entrada_usuario == 1:
                        print("Menu de Inventario")
                    
                    print("Usted eligió la opcion {} !\n".format(entrada_usuario))
                else:
                    print('Error, solo de aceptan numeros del 0 al 4')
                
                input()
                limpiarConsola()
       
            except ValueError:
                print("Error, ingrese solamente numeros")


if __name__ == '__main__':
    menu()
