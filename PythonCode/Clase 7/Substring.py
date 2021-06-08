saludo = "Hola!"
#Se puede accesar a cualquier indice del string
print(saludo)
print(saludo[2])


#Se puede definir el inicio y el final de mi substring
print(saludo[0:2])

print(saludo[1:])#todos menos el primero


amigos = ['Sebas','Ricardo','Jose','Juan', 'Pedro']

print(amigos[:2])

print(amigos[3:])

print(amigos[-3:])


mejores_amigos = amigos

mejores_amigos.append('Jorge')

print(mejores_amigos)
print(amigos)
