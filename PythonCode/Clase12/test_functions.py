a

class TestFunctions(TestCase):
    def test_obtiene_resultado_division(self):
        dividendo = 15
        divisor = 3
        expected = 5
        
        self.assertEqual(dividir(dividendo, divisor), expected)

    def test_dividir_negativo(self):
        dividendo = -15
        divisor = 3
        expected = -5
        
        self.assertEqual(dividir(dividendo, divisor), expected)
        
    def test_dividendo_cero(self):
        dividendo = 0
        divisor = 15
        expected = 0
        
        self.assertEqual(dividir(dividendo, divisor), expected)
    
    def test_dividir_entre_cero(self):
        with self.assertRaises(ValueError):
            dividir(15, 0)
            
    def test_multiplica_sin_argumentos(self):
        with self.assertRaises(ValueError):
            multiplicar()
            
    def test_multiplica_un_valor(self):
        expected = 10
        
        self.assertEqual(multiplicar(10), expected)
        
    def test_multiplica_por_cero(self):
        expected = 0
        
        self.assertEqual(multiplicar(0), expected)
        
    def test_multiplica_varios_numeros(self):
        input = (10, 5, 2)
        expected = 100
        
        self.assertEqual(multiplicar(*input), expected)
        
    def test_multiplica_varios_numeros_por_cero(self):
        input = (10, 5, 0)
        expected = 0
        
        self.assertEqual(multiplicar(*input), expected)
