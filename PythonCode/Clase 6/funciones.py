#Definicion de Funciones
def mi_funcion():
    print('Hola Mundo')
    
usuarios = [
    {
        'username': 'asanchez',
        'password': '123',
        'role': 'admin'
    },
    {
        'username': 'jjarahe',
        'password': '123',
        'role': 'user'
    },
    {
        'username': 'gfallas',
        'password': '123',
        'role': 'admin'
    }
]   
 
def despedida():
    saludo()
    print("Hasta pronto!")

def saludo():
    print('Hola, todo bien')

def get_nombre_completo(nombre, apellido):
    print(f'{nombre} {apellido}')

def es_admin(usuario):
    return usuario['role'] =='admin'
get_nombre_completo('Juan', 'Jara')

print(es_admin(usuarios[1]))
print(es_admin(usuarios[0]))

usuario_admin = []

for usuario in usuarios:
    if es_admin(usuario):
        usuario_admin.append(usuario)

#print(usuario_admin['username'], usuario_admin['role'])
print("Lista de Administradores: ")
for admin in usuario_admin:
    print(f"{admin['username']}")
