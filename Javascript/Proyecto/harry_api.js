//http://hp-api.herokuapp.com/api/characters

let listOfCharacters = []

async function fecthCharacter() {
    const response =  await fetch('http://hp-api.herokuapp.com/api/characters')
    const characters = await response.json()
    listOfCharacters = characters.filter(elemento => elemento.name && elemento.image)
    console.log('API cargada', listOfCharacters)              
}
