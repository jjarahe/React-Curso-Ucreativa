fecthCharacter()

const boton = document.querySelector('#respuesta')
const typeOfQuestions = ['actor','name','house','patronus']
const questions = ['Cual es actor que interpreta este personaje?','Como se llama el personaje?','Cual es la casa a la que pertenece?','Cual es su patronus?'] 
const correctAnswers = []
const anwersLetters = ["A","B","C","D"]
let fakeCharacters = []
let puntuacion = 0
const nombreJugador = "Juan Jara"

function loadFakeCharacters() {
    fakeCharacters = []
    for (let i = 0; i < listOfCharacters.length; i++) {
        fakeCharacters.push(listOfCharacters[getRandomInt(0,listOfCharacters.length)])   
    }
}

boton.onclick =  () => {
    for (let index = 1; index < 4; index++) {
        createQuestion(index)  
        
    }
}

function createQuestion(numOfQuestion) {
    
    const character = listOfCharacters[getRandomInt(0,listOfCharacters.length)]
    correctAnswers.push(character)
    loadFakeCharacters()
    let filteredCharacters = [...new Set(fakeCharacters)]
    filteredCharacters.splice(3,filteredCharacters.length, character)
    //filteredCharacters.push(character)
    console.log(filteredCharacters)
    
    let answers = filteredCharacters.map((value)=> ({ value, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({value}) => value )
    
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
        
        for (let i = 0; i < 4; i++) {
            
            const li = document.createElement("li")
            li.classList.add("list-group-item")
                const input = document.createElement("input")
                input.type = "radio"
                input.name = "respuesta"
                input.id = `respuesta-${anwersLetters[i]}-${numOfQuestion}`
                input.value = `${answers[i][typeOfQuestions[randomQuestion]]}`
                const label = document.createElement("label")
                label.setAttribute('for',`respuesta-${anwersLetters[i]}-${numOfQuestion}`)
                label.textContent = `${answers[i][typeOfQuestions[randomQuestion]]}`    
                
            li.appendChild(input)
            li.appendChild(label)
            ul.appendChild(li)
        }
    /*const div_boton = document.createElement("div")
        div_boton.classList.add("card-body","d-flex","justify-content-center")
            const buttonD = document.createElement("button")
            buttonD.type = "button"
            buttonD.classList.add("btn","btn-primary")
            buttonD.textContent = "Responder"
            buttonD.setAttribute("onclick", alert("clicked"))
            div_boton.appendChild(buttonD)*/
            
        
    card.appendChild(img)
    card.appendChild(card_body)
    card.appendChild(ul)
    //card.appendChild(div_boton)
    container.appendChild(card)
    const body = document.querySelector("body")
    body.appendChild(container)
}
