#Diccionarios
#Es una estructura de datos que nos permite almacenar informacion mas compleja.
#Funciona similar a los diccionarios donde buscamos un concepto y encontramos su #definicion.

mi_primer_diccionario = {
    'saludo': 'Hola Mundo'
}

print(mi_primer_diccionario)
print(mi_primer_diccionario['saludo'])

usuario = {
    'username': 'asanchez',
    'password': '123'
}

user = input('Digite su nombre de usuario: ')
password = input('Digite su contrasena: ')

if usuario['username'] == user and usuario['password']==password:
    print('Bienvenido al sistema')
else:
    print('Credenciales incorrectas!')
    
    
usuario['rol'] = 'admin'

print(usuario)

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


print(usuarios)
print(usuarios[1])
print(usuarios[1]['username'])
