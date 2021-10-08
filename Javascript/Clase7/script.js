function test(){
    console.log('aqui estoy')
    
}

function procesarFormulario() {
const formData = {}

document.querySelectorAll('div.name-item input').forEach( element => {
    formData[element.placeholder.toLowerCase()] = element.value
})

formData.genero = document.querySelector('input[name="gender"]:checked').value

formData.peso = document.querySelector('input[name="peso"]').value
formData.altura = document.querySelector('input[name="altura"]').value

formData.direccion = document.querySelector('input[name="direccion"]').value

document.querySelectorAll('div.city-item input').forEach( element => {
    formData[element.placeholder.toLowerCase()] = element.value
})

formData.provincia = document.querySelector('div.city-item select').value

formData.email =  document.querySelector('input[type=email]').value

const telefono = document.querySelector('input[name="telefono"]').value
if(telefono.match(/\b\d{8}\b/)){
    formData.telefono = document.querySelector('input[name="telefono"]').value
} else {
    document.querySelector('input[name="telefono"]').parentElement.children[0].classList.add('error')
    return false
}

formData.personalTrainer = document.querySelector('input[name="personal-trainer"]:checked').value

formData.experiencia = document.querySelector('input[name="experiencia"]:checked').value

formData.membresia = document.querySelector('input[name="membership"]:checked').value

const display = document.querySelector('#display')
display.textContent = JSON.stringify(formData, null, 4)
display.setAttribute('class','visible')

console.log(JSON.stringify(formData, null, 4))

return false
}
