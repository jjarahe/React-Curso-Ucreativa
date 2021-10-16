fecthCharacter()

const boton = document.querySelector('#respuesta')
const typeOfQuestions = ['actor','name','house','patronus']
const questions = ['Cual es actor que interpreta este personaje?','Como se llama el personaje?','Cual es la casa a la que pertenece?','Cual es su patronus?'] 


boton.onclick =  () => {
    createQuestion()
    
    
}


function createQuestion() {

    const character = listOfCharacters[getRandomInt(0,listOfCharacters.length)]
    
    const randomQuestion = getRandomInt(0,typeOfQuestions.length)
    
    const container = document.createElement("div")
        container.classList.add("container","d-flex","justify-content-center","mt-5", "mb-5")

    const card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("style","width: 30rem;")

    const img = document.createElement("img")
        img.src = character.image
        img.classList.add("card-img-top","p-2")
        img.alt = "Harry Potter imagen"
        img.setAttribute("style","height: 30rem;")

    const card_body = document.createElement("div")
        card_body.classList.add("card-body")
            const titulo_pregunta = document.createElement("h5")
            titulo_pregunta.classList.add("card-title")
            titulo_pregunta.textContent = "Pregunta"
        
            const p = document.createElement("p")
            p.classList.add("card-text")
            p.textContent = questions[randomQuestion]
    card_body.appendChild(titulo_pregunta)
    card_body.appendChild(p)

    const ul = document.createElement("ul")
        ul.classList.add("list-group","list-group-flush")
        
        for (let i = 0; i < 3; i++) {
            
            const li = document.createElement("li")
            li.classList.add("list-group-item")
                const input = document.createElement("input")
                input.type = "radio"
                input.name = "respuesta"
                input.id = `respuesta${i}`
            
                const label = document.createElement("label")
                label.for = `respuesta${i}`
                const fakeCharacter = listOfCharacters[getRandomInt(0,listOfCharacters.length)]//que fake no sea igual a character para no tener 2 correctas
                label.textContent = fakeCharacter[typeOfQuestions[randomQuestion]]
                
            li.appendChild(input)
            li.appendChild(label)
            
            ul.appendChild(li)
        }
            
    const div_boton = document.createElement("div")
        div_boton.classList.add("card-body","d-flex","justify-content-center")
            const button = document.createElement("button")
            button.type = "button"
            button.classList.add("btn","btn-primary")
            button.id = "respuestaDinamica"
            button.textContent = "Responder"
            div_boton.appendChild(button)
    card.appendChild(img)
    card.appendChild(card_body)
    card.appendChild(ul)
    card.appendChild(div_boton)
    container.appendChild(card)
    const body = document.querySelector("body")
    body.appendChild(container)
}
