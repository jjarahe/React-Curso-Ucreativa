import keyboard

selected = 1

def show_menu():
    global selected
    print("\n" * 30)
    print("Seleccione el departamento:")
    print("{0} 1. Damas  {1}".format(">" if selected == 1 else " ", "<" if selected == 1 else " "))
    print("{0} 2. Caballeros  {1}".format(">" if selected == 2 else " ", "<" if selected == 2 else " "))
    print("{0} 3. Ninos  {1}".format(">" if selected == 3 else " ", "<" if selected == 3 else " "))
    print("{0} 4. Salir  {1}".format(">" if selected == 4 else " ", "<" if selected == 4 else " "))
    if(selected == 4):
        menu_principal()
    
def menu_principal():
    global selected
    print("\n" * 30)
    print("Menu Principal:")
    print("{0} 1. Inventario  {1}".format(">" if selected == 1 else " ", "<" if selected == 1 else " "))
    print("{0} 2. Facturacion  {1}".format(">" if selected == 2 else " ", "<" if selected == 2 else " "))
    print("{0} 3. Salir  {1}".format(">" if selected == 3 else " ", "<" if selected == 3 else " "))


def up():
    global selected
    if selected == 1:
        return
    selected -= 1
    show_menu()

def down():
    global selected
    if selected == 4:
        return
    selected += 1
    show_menu()

show_menu()
keyboard.add_hotkey('up', up)
keyboard.add_hotkey('down', down)
keyboard.wait('esc')
