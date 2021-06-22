import os
import math
from simple_term_menu import TerminalMenu

resultado = 0
calculos = []

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
    print(f"            Calculadora")
    print("--------------------------------------------")

##
# Menu Principal.
#
# Return {Integer}
##
def menu_principal():
    global resultado
    menu_cabecera()
    print(calculos)
    print(f"Resultado: {float(resultado)}")
    terminal_menu = TerminalMenu(["Sumar", "Restar","Multiplicar", "Dividir", "Raiz Cuadrada","Salir"])
    menu_entry_index = terminal_menu.show()
    print("--------------------------------------------")
    
    if menu_entry_index == 5:
        exit()
        
    return menu_entry_index
   
def trace_calculos(numero1, operacion ,numero2):
    global calculos
    calculos.append(numero1)
    calculos.append(operacion)
    calculos.append(numero2)
 
suma = lambda numero: resultado + numero
def menu_suma():
    global resultado
    try:
        numero = float(input("Ingrese el numero: "))
        trace_calculos(resultado, "+", numero)
        resultado = suma(numero)
    except ValueError:  
        print("Se ingreso un valor no esperado, por favor intentelo de nuevo")
        input()
        menu_suma()


resta = lambda numero: resultado - numero
def menu_resta():
    global resultado
    try:
        numero = float(input("Ingrese el numero: "))
        trace_calculos(resultado, "-", numero)
        resultado = resta(numero)
    except ValueError:  
        print("Se ingreso un valor no esperado, por favor intentelo de nuevo")
        input()
        menu_resta()

multiplicar = lambda numero: resultado * numero
def menu_multiplicar():
    global resultado
    try:
        numero = float(input("Ingrese el numero: "))
        trace_calculos(resultado, "*", numero)
        resultado = multiplicar(numero)
    except ValueError:  
        print("Se ingreso un valor no esperado, por favor intentelo de nuevo")
        input()
        menu_multiplicar()

dividir = lambda numero: resultado / numero      
def menu_dividir():
    global resultado
    try:
        numero = float(input("Ingrese el numero: "))
        trace_calculos(resultado, "/", numero)
        resultado = dividir(numero)
    except ZeroDivisionError:
        print("No se permite la division entre cero")
        input()
        menu_dividir()
    except ValueError:  
        print("Se ingreso un valor no esperado, por favor intentelo de nuevo")
        input()
        menu_dividir()   
 
raiz_cuadrada = lambda resultado: math.sqrt(resultado)  
def menu_raiz_cuadrada():
    global resultado
    trace_calculos(resultado, "**", "")
    resultado = raiz_cuadrada(resultado)
    
def main():
    global resultado
    try:
        opcion_menu = None
        resultado = float(input(f"Ingrese el primer numero de la operacion: "))
        while True:
            opcion_menu = menu_principal()
            menu_cabecera()
            if opcion_menu == 0:
                menu_suma()
              
            if opcion_menu == 1:
                menu_resta()
               
            if opcion_menu == 2:   
                menu_multiplicar()
             
            if opcion_menu == 3:
                menu_dividir()
            
            if opcion_menu == 4:
                menu_raiz_cuadrada()
    except ValueError:
        print("Se ingreso un valor no esperado, por favor intentelo de nuevo")
        input()
        main()

if __name__ == "__main__":
    main()
