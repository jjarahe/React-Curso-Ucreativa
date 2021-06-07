print('Inicio')

ya_se_bannio = input("Ya esta banniado? (si/no) => ")
while ya_se_bannio.lower() == 'no':
    print("Debe tomar un bano antes de salir de compras")
    ya_se_bannio = input("Ya se bannio? (si/no) => ")
    
if ya_se_bannio.lower() == 'si':
    print("Buscar billetera y llaves")
    while True:
        print("Manejar a la tienda")
        print("Parquear")
        print("Caminar a la tienda")
        print("Buscar articulo")
        flag_articulo = input("Encontro el articulo? (si/no)")
        if flag_articulo.lower() == 'si':
            break

print("Fin")
