from unittest import TestCase
from herencia import Bicicleta

class TestFunctions(TestCase):

    def test_bicicleta_acelerar(self):
        expected = "Pedaleando!!!!"
        
        self.assertEqual(Bicicleta("negra", 2, "ruta").pedalear(), expected)
