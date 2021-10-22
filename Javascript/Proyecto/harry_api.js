let listOfCharacters = []

/**
 * Load list of Characters from the API.
 *
 */
async function fecthCharacter() {
    const response =  await fetch('http://hp-api.herokuapp.com/api/characters')
    const characters = await response.json()
    listOfCharacters = characters.filter(elemento => elemento.name && elemento.image && elemento.patronus &&  elemento.house)           
}


/**
 * Helper to get a random number.
 *
 */
function getRandomInt(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}
