//http://hp-api.herokuapp.com/api/characters

let listOfCharacters = []

async function fecthCharacter() {
    const response =  await fetch('http://hp-api.herokuapp.com/api/characters')
    const characters = await response.json()
    listOfCharacters = characters.filter(elemento => elemento.name && elemento.image && elemento.patronus &&  elemento.house)
    console.log('API cargada', listOfCharacters)              
}


//Helper
function getRandomInt(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}
