const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')
const link = document.getElementById('link')

// input.addEventListener('keyup', (e) =>{
//     console.log(e.explicitOriginalTarget.attributes[0].nodeValue)
// })

// addEventListener('click', (e)=>{
//     console.log(e)
// })

// button.addEventListener('click',(e)=>{
//     console.log(e.target)
// })

// const gallery = document.getElementById('gallery')

gallery.addEventListener('click', (e)=>{
    console.log(e.target.classList.add('red'))
 })

 form.addEventListener('submit', (e) =>{
     e.preventDefault() //-> eliminamos las acciones por defectos como lo es al enviar reiniciar el formulario.
     console.log('El formulario se ha enviado')
 })

link.addEventListener('click', (e) =>{
    e.preventDefault() //---> se usa solo con formularios por que evita las herramientas por defecto. la unica manera es que aqui evitamos su funcion.
})

form.addEventListener('submit',(e) =>{
    e.preventDefault()
    console.log('el formulario se ha enviado')
})

button.addEventListener('click', ()=>{
    input.value = 'has hecho click'
})