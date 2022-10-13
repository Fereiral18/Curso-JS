//Eventos de raton:

// click -> cuando pulsamos el boton izquierdo
// dblclick -> cuando pulsamos dos veces seguido el boton izquierdo del raton
// mouseenter-> cuando entramos en la zona que tiene el evento
// mouseleave-> cuando salimos de la zona que tiene el elemento
// mouedown-> cuando pulsamos y soltamos el boton izquierdo del raton
// mouseup-> cuando soltamos el boton izquierdo del raton
// mousemove-> cuando movemos el raton

// Eventos de teclado
// keydown-> cuando pulsamos una tecla
// keyup -> cuando soltamos una tecla
// keypress-> cuando pulsamos una tecla y no la soltamos

const button = document.getElementById('button')
const box = document.getElementById('box')
const input = document.getElementById('input')

button.addEventListener('click', () =>{
    console.log('click')
})

button.addEventListener('dblclick', ()=> {
    console.log('dblclick')
})

box.addEventListener('mouseenter', ()=>{
    box.classList.replace('red', 'green')
})
box.addEventListener('mouseleave', ()=>{
    box.classList.replace('green', 'red')
    
})

box.addEventListener('mousedown', () =>{    console.log('has pulsado en la caja')
})

box.addEventListener('mouseup', () =>{
    console.log('has soltado el boton de la caja')
})

box.addEventListener('mousemove', () =>{
    console.log('has pulsado en la caja')
})

// Eventos de teclado--------------------

input.addEventListener('keydown', () =>{
    console.log('has pulsado una tecla')
})
input.addEventListener('keyup', () =>{
    console.log('has soltado una tecla')
})
input.addEventListener('keypress', () =>{
    console.log('estas pulsando una tecla')
})