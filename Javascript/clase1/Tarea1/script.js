const body = document.querySelector('body')

const div = document.createElement("div")
div.id = "Titulo"

const h1 = document.createElement("h1")
h1.textContent = "Mis peliculas favoritas"



div.appendChild(h1)
body.appendChild(div)
