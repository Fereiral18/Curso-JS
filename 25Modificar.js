// //Atributos
//     elementGetAttribute('attribute') devuelve
//     elementSetAttribute('attribute', value) agrega

// //Clases
//     element.classList.add('class','class'..) agrega la cantidad de clases que queramos
//     element.classList.remove('class','class'..) borra la cantidad de clases que queramos
//     element.classList.toogle('class'[,force]..) devuelve true o false en funcion de que si tiene la clase o no, si devuelve true añade la clase, y si devuelve false devuelve la clase que le hayamos puesto.
//     element.classList.contains('class') 
//     element.classList.replace('oldClass', newClass..)

    //Atributos directos
    //     id 
    //     value

const title = document.getElementById('title')
const names = document.getElementById('names')

console.log(names.getAttribute('id'))
names.setAttribute('type', 'date')
// console.log(names)

// title.classList.add('main-title', 'other-title')

// title.classList.remove('main-title', 'other-title', 'title')

// if(title.classList.contains('title'))console.log('tiene la clase title')
// else console.log('title no tiene la clase title')

title.classList.replace('title', 'main-title')

console.log(title)
console.log(names)

// console.log(title.innerHTML) //---> recoge las etiquetas del html dentro del elemento seleccionado
// console.log(title.textContent) // --> recoge el texto en el elemento.

console.log(names.value.length)