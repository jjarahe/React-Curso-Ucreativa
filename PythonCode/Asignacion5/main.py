import os
from simple_term_menu import TerminalMenu

##
# Limpia la consola de Windows y MAC OS.
#
# Return {void}
##
def limpiar_consola():
    if os.name == "posix" or os.name == "mac":
        os.system("clear")
    elif os.name == "ce" or os.name == "dos" or os.name == "nt":
        os.system("cls")

##
# Menu Cabecera.
#
# Return {void}
##
def menu_cabecera():
    limpiar_consola()
    print("--------------------------------------------")
    print(f"            El Gran Parqueo")
    print("--------------------------------------------")

##
# Menu Principal.
#
# Return {Integer}
##
def menu_principal():
    menu_cabecera()
    terminal_menu = TerminalMenu(["Ver todos los vehiculos", "Ver vehiculos con espacio mensual", "Registrar vehiculo","Salir"])
    menu_entry_index = terminal_menu.show()
    print("--------------------------------------------")
    return menu_entry_index

##
# Imprime todos los vehiculos registrados en el parqueo.
#
# Return {void}
##
def ver_todos_vehiculos():
    menu_cabecera()
    vehiculos_espacio_mensual = vehiculos["vehiculos_espacio_mensual"]
    vehiculos_por_hora = vehiculos["vehiculos_por_hora"]
    print(f"Lista de todos los vehiculos: \n")
    
    for vehiculo in vehiculos_espacio_mensual:
        print(f"Marca: {vehiculo['marca']}")
        print(f"Estilo: {vehiculo['estilo']}")
        print(f"Modelo: {vehiculo['modelo']}")
        print(f"Placa: {vehiculo['placa']} \n")
  
    for vehiculo in vehiculos_por_hora:
        print(f"Marca: {vehiculo['marca']}")
        print(f"Estilo: {vehiculo['estilo']}")
        print(f"Modelo: {vehiculo['modelo']}")
        print(f"Placa: {vehiculo['placa']}\n")

##
# Imprime los vehiculos con espacio mensual.
#
# Return {void}
##     
def ver_vehiculos_espacio_mensual():
    menu_cabecera()
    vehiculos_espacio_mensual = vehiculos["vehiculos_espacio_mensual"]
    print(f"Lista de vehiculos con espacio mensual: \n")
    
    for vehiculo in vehiculos_espacio_mensual:
        print(f"Marca: {vehiculo['marca']}")
        print(f"Estilo: {vehiculo['estilo']}")
        print(f"Modelo: {vehiculo['modelo']}")
        print(f"Placa: {vehiculo['placa']} \n")
 
##
# Establece el tipo de tarifa para determinar en que lista se guarda el nuevo vehiculo.
#
# Return {void}
##  
def menu_tipo_tarifa(): 
    menu_cabecera()
    print(f"Elija el tipo de tarifa del vehiculo: ")
    terminal_menu = TerminalMenu(["Mensual", "Por hora"])
    menu_entry_index = terminal_menu.show()
    print("--------------------------------------------")
    return menu_entry_index
    
##
# Registro de nuevos vehiculos en el parqueo.
#
# Return {void}
##   
def registrar_vehiculo():
    try:
        menu_cabecera()
        print(f"Datos del Vehiculo: \n")
        marca = str(input("Marca: "))
        estilo = str(input("Estilo: "))
        modelo = int(input("Modelo (año): "))
        placa = str(input("Placa: "))

        tipo_tarifa = menu_tipo_tarifa()
        
        vehiculo = {
                'marca': marca,
                'estilo': estilo,
                'modelo': modelo,
                'placa': placa
            }

        if tipo_tarifa == 0:
            vehiculos["vehiculos_espacio_mensual"].append(vehiculo)
        if tipo_tarifa == 1:
            vehiculos["vehiculos_por_hora"].append(vehiculo)
        
        print(f"Vehiculo insetado en la lista de tarifa indicada!!!")
    
    except ValueError:
            print("Se ingreso un valor no esperado, por favor intentelo de nuevo")
            input()
            registrar_vehiculo()
            
def main():
    opcion_menu = 0
    while opcion_menu != 3:
        opcion_menu = menu_principal()
        menu_cabecera()
        if opcion_menu == 0:
            ver_todos_vehiculos()
            input()
        if opcion_menu == 1:
            ver_vehiculos_espacio_mensual()
            input()
        if opcion_menu == 2:   
            registrar_vehiculo()
            input()
        if opcion_menu == 3:   
            print("Saliendo del Programa")

#Lista de autos con espacio mensual
vehiculos = {
    'nombre_parqueo': 'El gran Parqueo',
    'vehiculos_espacio_mensual': [
        {
            'marca': 'Toyota',
            'estilo': 'Corolla',
            'modelo': 1995,
            'placa': 'ABC333'
        },
        {
            'marca': 'Susuki',
            'estilo': 'Vitara',
            'modelo': 2017,
            'placa': 'BND947'
        },
        {
            'marca': 'Mazda',
            'estilo': '323',
            'modelo': 2010,
            'placa': '456875'
        },
        {
            'marca': 'Hyundai',
            'estilo': 'Tucson',
            'modelo': 2020,
            'placa': 'ACB458'
        }
    ],
    'vehiculos_por_hora': [] 
}

if __name__ == "__main__":
    main()
