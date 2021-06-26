from unittest import TestCase
from herencia import Carro

class TestFunctions(TestCase):
    
    def test_carro_acelerar(self):
        expected = "Acelerando!!!!"
        
        self.assertEqual(Carro("rojo", 4, "260 km/h", "3800hp").acelerar(), expected)
