const body = document.querySelector('body')

const div_titulo = document.createElement("div")
div_titulo.id = "Titulo"

const h1_titulo = document.createElement("h1")
h1_titulo.textContent = "Mis peliculas favoritas"
div_titulo.appendChild(h1_titulo)
body.appendChild(div_titulo)


const div_lista = document.createElement("div")
div_lista.className = 'lista'
const ul_peliculas = document.createElement("ul")
const peliculas = ['Senor de los Anillos','Harry Potter','Transportador']
for(let i = 0; i< 3; i++) {
    var li = document.createElement("li")
    li.textContent = peliculas[i]
    ul_peliculas.appendChild(li)
}
div_lista.appendChild(ul_peliculas)
body.appendChild(div_lista)


const boton_h1_color = document.createElement("button")
boton_h1_color.innerHTML = 'Cambia Color'
/*boton_h1_color.addEventListener ("click", function(){
    var h1Element = document.querySelector('h1')
    if(h1Element.classList.contains('red-text'))
        h1Element.classList.remove('red-text')
    else
        h1Element.classList.add('red-text')
});*/

boton_h1_color.onclick = function(){
    var h1Element = document.querySelector('h1')
    if(h1Element.classList.contains('red-text'))
        h1Element.classList.remove('red-text')
    else
        h1Element.classList.add('red-text')
}

div_titulo.appendChild(boton_h1_color)


const boton_li_color = document.createElement("button")
boton_li_color.innerHTML = 'Cambia Color'
boton_li_color.addEventListener ("click", function(){
    var liElement = document.querySelectorAll('li')[1]
    if(liElement.classList.contains('blue-text'))
        liElement.classList.remove('blue-text')
    else
    liElement.classList.add('blue-text')
});
div_lista.appendChild(boton_li_color)
