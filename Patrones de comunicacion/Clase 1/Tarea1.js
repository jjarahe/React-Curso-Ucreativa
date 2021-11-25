/*Ejercicio 1.

Se le debe solicitar al usuario que ingrese un valor consultándole su género musical favorito ( 

const resultado =  window.prompt("Ingrese el valor");   ), de acuerdo al género musical se debe imprimir en consola ( console.log('') ) grupos musicales relacionados al género musical.

Ejemplo.. el usuario escribió rock, entonces debe imprimir "linkin park, guns & roses"*/
const resultado1 = prompt("Escriba su género musical favorito (Rock, Salsa, Electronica): ")
if (resultado1.toLowerCase() == "rock")  
  console.log('The Beatles, Pink Floyd, Led Zeppeling') 
if(resultado1.toLowerCase() == "salsa") 
   console.log('Grupo Niche, The Latin Brothers, Marc Antony')
if(resultado1.toLowerCase() == "electronica") 
  console.log('Daft Punk, Massive Attack, Justice')
else
    console.log(`No tengo informacion sobre este genero musical ${resultado1}, por favor intente con otro!`)
    

/*Ejercicio 2.

Se le debe solicitar al usuario que ingrese un valor consultándole su animal favorito (  const resultado =  window.prompt("Ingrese el valor");   ), de acuerdo al animal dado se debe imprimir en consola ( console.log('') ) el sonido de ese animal.

Ejemplo.. el usuario escribió perro, entonces debe imprimir "rawr"
*/

const resultado2 = prompt("Escriba su animal favorito (Perro, Vaca, Leon): ");

if(resultado2.toLowerCase() == "perro") 
    console.log('Guau guau!!');
if(resultado2.toLowerCase() == "vaca") 
    console.log('Muuu Muuu!!');
if(resultado2.toLowerCase() == "leon") 
   console.log('Rawwrr Rawwrr!!')
else
    console.log("No conozco el sonido de ese animal, lo siento!")
    

/*Ejercicio 3.

Se le debe solicitar al usuario que ingrese un valor consultándole un salario (  const resultado =  window.prompt("Ingrese el valor");   ), si el salario es menor a 300000 se debe imprimir en consola que el usuario recibe el salario mínimo, si el salario es mayor a 300000 pero menor a 670000 se debe imprimir en consola que el usuario recibe salario básico, pero si el salario es mayor a 1000000 se debe imprimir en consola que el usuario tiene un salario millonario.*/ 

const resultado3 = prompt("Digite el monto que recibe de salario: ")
if(parseInt(resultado3) < 300000 )
    console.log('Este monto esta dentro de la categoria Salario Minino')
if(parseInt(resultado3) >= 300000 && resultado3 < 670000) 
    console.log('Este monto esta dentro de la categoria Salario Básico');
if(parseInt(resultado3) >= 1000000)
    console.log('Este monto esta dentro de la categoria Salario Millonario')
if(parseInt(resultado3) >= 670000 && parseInt(resultado3) < 1000000 ) 
    console.log('No tengo informacion para categorizar este salario, lo lamento!')
