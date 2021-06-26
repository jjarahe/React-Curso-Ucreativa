class Vehiculo:
    def __init__(self, color, ruedas):
        self.color = color
        self.ruedas = ruedas


class Carro(Vehiculo):
    def __init__(self, color, ruedas, velocidad, cilindrada):
        super().__init__(color, ruedas)
        self.velocidad = velocidad
        self.cilindrada = cilindrada

    def acelerar(self):
        return "Acelerando!!!!"

        
class Bicicleta(Vehiculo):
    def __init__(self, color, ruedas, tipo):
        super().__init__(color, ruedas)
        self.tipo = tipo
        
    def pedalear(self):
       return "Pedaleando!!!!"

carro = Carro("rojo", 4, "260 km/h", "3800hp")
carro.acelerar()

bicicleta = Bicicleta("negra", 2, "ruta")
bicicleta.pedalear()
print(bicicleta.color)
