const colors = ['black', 'silver', 'gray', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon'];

const numbers = [5, 10, 45, 87, 65, 25, 63, 41, 78, 66, 23, 97, 7, 11, 32, 75, 88, 91];

const things = ['HOUSE MD', 'BREAKING BAD', 'THE OFFICE', 'DEXTER', 'RICK AND MORTY'];

const nombreUno = 'Micheal';
const apellidoUno = 'Scott';
const direccionUno = 'Scranton, PA';
const ocupacionUno = 'Gerente';

const nombreDos = 'Gregory';
const apellidoDos = 'House';
const direccionDos = 'Scranton, PA';
const ocupacionDos = 'Doctor'


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function cambiarColorFondo(colors){
    document.body.style.background =  colors[getRandomInt(0,colors.length)]
    //console.log( colors[getRandomInt(0,colors.length)])
}

const boton = document.querySelector('#boton1');
const body = document.querySelector('body');
const listaPersonas = []

boton.onclick = () => {
   //cambiarColorFondo(colors)
    procesarFormulario()
    document.querySelector('textarea').textContent = JSON.stringify(listaPersonas,null, 4)
}

function cazarPares(lista) {
    const listaPares = [];
    lista.forEach( element => {
        if(element%2 === 0){
            listaPares.push(element);
        }
    });
    return listaPares;
}

function numerosMenoresCincuenta(lista) {
    const listaResultado = [];
    lista.forEach(elemento => {
        if(elemento <= 50){
            listaResultado.push(elemento);
        }    
    });
    return listaResultado;
}

function minusculas(lista){
    const listaResultado = [];
    lista.forEach(elem => {
        listaResultado.push(elem.toLowerCase())
    })
    return listaResultado
}

const persona = {
    nombre: nombreUno, 
    apellido: apellidoUno,
    direccion: direccionUno,
    ocupacion: ocupacionUno
}

const persona2 = {
    nombre: nombreDos, 
    apellido: apellidoDos,
    direccion: direccionDos,
    ocupacion: ocupacionDos
}

//JSON tiene 2 funciones stringify y parse.
function procesarPersona(persona){
    document.querySelector('textarea').textContent = JSON.stringify(persona, null, 4)
}


function procesarFormulario(){
    const persona = {
        nombre: '',
        apellido: '',
        pais: '',
        lenguajeFavorito: '',
        edad: '',
        vehiculos: []
    }
    const  textos = document.querySelectorAll('input[type=text]')
    persona.nombre = textos[0].value
    persona.apellido = textos[1].value
    persona.pais = document.querySelector('#country').value
    //persona.lenguajeFavorito = document.querySelector("input[name=fav_language]:checked").value
    document.querySelectorAll('input[name="fav_language"]').forEach(element => {
        if(element.checked){
            persona.lenguajeFavorito = element.value
        }
    })
    
    //persona.edad = document.querySelector("input[name=age]:checked").value 
    document.querySelectorAll('input[name="age"]').forEach(element => {
        if(element.checked){
            persona.edad = element.value
        }
    })
    
    //persona.vehiculos = document.querySelectorAll('input[type=checkbox]:checked').value;
    document.querySelectorAll('input[type=checkbox]').forEach(element => {
        if(element.checked){
            persona.vehiculos.push(element.value) 
        }
    })

    listaPersonas.push(persona)
}
