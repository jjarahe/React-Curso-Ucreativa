import json

def leer(nombre_archivo):
    with open(nombre_archivo, 'r') as archivo:
        return json.load(archivo)
        
def escribir(nombre_archivo, diccionario):
    with open(f"{nombre_archivo}.json", "w") as archivo:
        archivo.write(json.dumps(diccionario))
        return True
