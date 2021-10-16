fecthCharacter()

const boton = document.querySelector('#respuesta')

boton.onclick =  () => {
    console.log('testxs') 
  
}

const container = document.createElement("div")
container.classList.add("container","d-flex","justify-content-center","mt-5")

const card = document.createElement("div")
card.classList.add("card")
card.setAttribute("style","width: 30rem;")

const img = document.createElement("img")
img.src = "http://hp-api.herokuapp.com/images/ron.jpg"
img.classList.add("card-img-top","p-2")
img.alt = "Harry Potter imagen"
img.setAttribute("style","height: 30rem;")

const card_body = document.createElement("div")
card_body.classList.add("card-body")
    const titulo_pregunta = document.createElement("h5")
    titulo_pregunta.classList.add("card-title")
    titulo_pregunta.innerText = "Pregunta"
    
    const p = document.createElement("p")
    p.classList.add("card-text")
    p.innerText = "Como se llama este personaje?"
card_body.appendChild(titulo_pregunta)
card_body.appendChild(p)

const ul = document.createElement("ul")
ul.classList.add("list-group","list-group-flush")
    const li = document.createElement("li")
    li.classList.add("list-group-item")
        const input = document.createElement("input")
        input.type = "radio"
        input.name = "pregunta1"
        input.id = "pregunta1A"
    
        const label = document.createElement("label")
        label.for = "pregunta1A"
        label.innerText = "Harry Potter"
    li.appendChild(input)
    li.appendChild(label)
ul.appendChild(li)


card.appendChild(img)
card.appendChild(card_body)
card.appendChild(ul)
container.appendChild(card)

const body = document.querySelector("body")
body.appendChild(container)
