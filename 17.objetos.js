// Los objetos son estructuras de datos que representan propiedad, valores  y acciones que puede realizar el objeto.

// Todos los objetos tienen propiedades o atributos y comportamientos o acciones representados por pares de clave (key): valor(value)

// const person = {
//     name: 'Luis fereira',
//     age : 25,
//     sons : ['laura', 'diego','pepe','rosa']

// }

// for(let son in person.sons) {
//     console.log(son)
// }

// ejemplo:

const myCar = {
    make : 'mustang',
    age : 1986,
    color: ['azul', 'verde']
}

console.log(`Mi carro es un ${myCar.make} del año ${myCar.age} con un fascinante ${myCar.color[0]}`)



// console.log(myCars)
// console.log(myCar.make)
// console.log(myCar.age)
// console.log(myCar.color[0])


// console.log(person)
// console.log(person.name)
// console.log(person[name])no, si console.log(person['name'])-> no la detecta como variable por falta de '', debe ir en strings

// for (const key in person) {
//     console.log(key)-> imprimimos las claves y no los valores
// }

// for (const key in person) {
//     console.log(person[key]) -> imprimimos los valores 
// }

// for(const son of person.sons){
//     console.log(son) -> imprimimos los valores dentro del array, con (in) -> imprimiremos el indice del array
// }
// console.log(`Hola ${person.name} tienes ${person.age} años y el nombre de tus hijos son ${person.sons.join(', ')}`)