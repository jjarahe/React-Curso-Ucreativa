import os
from typing import NoReturn
#El nombre de las clases va en mayusculas.
# La funcion init es como el constructor de la clase.
class Persona:
    def __init__(self, nombre, apellido):
        self.nombre = nombre
        self.apellido = apellido


mi_estudiante = {
    'nombre': 'Luis',
    'edad': 25,
    'notas': [100,85,90,50],
    'porcentaje': 92 #Digamos que aqui podemos calcular el porcentaje dinamicamente.
}

def porcentaje(notas):
    return(notas) / len(notas)
    
#print(porcentaje(mi_estudiante['notas']))

class Estudiante:
    def __init__(self, nombre, edad, notas):
        self.nombre = nombre
        self.edad = edad
        self.notas = notas
        
    def porcentage(self):
        return sum(self.notas) / len(self.notas)

try:
    estudiante_uno = Estudiante('Luis', 25, [100,85,90,89,97])
    print(estudiante_uno.promedio())
    #print(estudiante_uno.nombre)
    #print(estudiante_uno.edad)
    #print(estudiante_uno.promedio())

except:
    print("Ocurrio un error")
    
class Pelicula:
    def __init__(self,nombre,director, annio = '2020'):#se ppueden definir parametros por defecto
        self.nombre = nombre
        self.director = director
        self.annio = annio
        
    def obtener_nombre(self):
        return self.nombre
        
    def obtener_director(self):
        return self.director

pelicula_uno = Pelicula('Fast and Furious','Justin Lin')
pelicula_dos= Pelicula('Buscando a Nemo','Andrew Stanton')
pelicula_tres= Pelicula('Cars','John Lasseter')

os.system("clear")
print(f" Nombre Pelicula: {pelicula_uno.obtener_nombre()} \nNombre Director: {pelicula_uno.obtener_director()}\n\n")
print(f" Nombre Pelicula: {pelicula_dos.obtener_nombre()} \nNombre Director: {pelicula_dos.obtener_director()}]\n\n")
print(f" Nombre Pelicula: {pelicula_tres.obtener_nombre()} \nNombre Director: {pelicula_tres.obtener_director()}\n\n")
exept:
