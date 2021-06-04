#Bucles Loops
amigos = ['Juan', 'Pedro', 'Daniel', 'Lucas']

print(amigos)

#Por convencion el nombre de las listas es en plural
#Cuando vamos a recorrer una lista en un ciclo for, el nombre del cursor va a ser el singular del nombre de la lista
for amigo in amigos:
    print(amigo)
    
    
elementos = [1,2,3,4,5,6,7,8,9,10,11,12]
#Cuando no utilizo el curso se utiliza _ para nombrarlo
for _ in elementos:
    print("Hola")
    
valor = 0
for _ in range(100):
    valor = valor + 2
    print(valor)


usuarios = [
    {
        'username': 'asanchez',
        'password': '123'
    },
    {
        'username': 'jjarahe',
        'password': '123'
    },
    {
        'username': 'gfallas',
        'password': '123'
    }
]

for usuario in usuarios:
    print(usuario)
    
for usuario in usuarios:
    print(usuario['username'])
    print(usuario['password'])
    print("*******************")
    
    
#while
estoy_aprendiendo = True
while estoy_aprendiendo:
    print('Estoy aprendiendo!')
    estoy_aprendiendo = input('Sigo aprediendo? (s/n) => ') == 's'
print('Ya no estoy aprendiendo!')
