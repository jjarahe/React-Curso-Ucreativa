console.log("test")
var test = document.querySelectorAll("li")[0].textContent
console.log(test)

const boton = document.querySelector('#boton_principal')

boton.onclick = () => {
    console.log(prompt())
    
}
console.log(document.querySelectorAll("li")[0].textContent)

console.log(document.querySelector('#division1').getAttribute('id'))
console.log(document.querySelector('#division1').setAttribute('class', 'js'))
console.log(document.querySelector('#division1').getAttributeNames())
console.log(document.querySelector('h1').textContent)
document.querySelector('h1').textContent = "Test Cambiando el texto"
console.log(document.querySelector('h1').textContent)

document.querySelector("img").getAttribute("src")
document.querySelectorAll('li')[1].textContent = 'Nuevo Texto'

document.querySelectorAll("input")[0].value = prompt()

const p = document.createElement("p")
p.textContent = 'Test Test Test'
document.querySelector("#division2").insertBefore(p, document.querySelector("form"))

const listaLi = document.querySelectorAll("input[type='text']")

for(let x = 0; x < listaLi.length(); x++){
    listaLi[x].value = prompt()
}
