estudiantes = [
    {'nombre': 'Juan',
    'apellidos': 'Jara Herrera',
    'nota': 100
    },
    {'nombre': 'Alejandro',
    'apellidos': 'Porras Porras',
    'nota': 85
    },
    {'nombre': 'Jose',
    'apellidos': 'Vargas Vargas',
    'nota': 65
    },
    {'nombre': 'Pedro',
    'apellidos': 'Escalona',
    'nota': 90
    },
    {'nombre': 'Jose Maria',
    'apellidos': 'Figueres',
    'nota': 75
    }
]

for estudiante in estudiantes:
    if estudiante['nota'] > 70:
        print(f"El estudiante {estudiante['nombre']} {estudiante['apellidos']} obtuvo una nota de {estudiante['nota']} y tiene un estado de aprovado")
    else:
        print(f"El estudiante {estudiante['nombre']} {estudiante['apellidos']} obtuvo una nota de {estudiante['nota']} y tiene un estado de reprobado")
