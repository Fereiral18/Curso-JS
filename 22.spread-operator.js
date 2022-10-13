// Spread operator o operador de expansion

// su sintaxis es ...
// const numeros = [-12,2,3,23,43,2,3]

// console.log(...numeros)

//Enviar un elemento en un array a una funcion

// const numeros1 = (a,b,c,d) =>{
//     console.log(a*b+c+d)
// }

// let numeros2 = [4,5,6,' cosas en la vida que no olvido']

// numeros1(...numeros2)


// Añadir un array a otro array

let newUsers = ['luis', 'chabelita', 'crisbell', 'rita']
let users = ['mar','lupita','felipe','andres']

users.push(...newUsers)
console.log(users)

//Copiar arrays

// let arr1 = [1,2,3,4]

// let arr2 = [...arr1]

// console.log(arr2)

//Concatenar arrays

// let arr1 = [1,2,3,4]

// let arr2 = [6,7,8]

// let arrConcat = arr1.concat(arr2)

// console.log(arrConcat)

            // o

    //  let arr1 = [1,2,3,4]

    //  let arr2 = [6,7,8]
            
    //  let arrConcat = [...arr1,...arr2]
            
    //   console.log(arrConcat)

//Enviar un numero indefinido de argumentos a una funcion (parametros REST)

// const restParams = (...numeros) => {
//         console.log(numeros)
// }

// restParams(1,2,3,4,5,6,0,7,8,8,9,0) //------------>Tomar en cuenta esto.


//libreria math
// const numeros = [-12,2,3,23,43,2,3]
// console.log(Math.min(...numeros))

//Eliminar elementos duplicados

// const numeros = [-12,2,3,23,43,2,3]

// console.log([...new Set(numeros)])

// ejercicio:

// const palabras = ['hola', 'hola', 'maria', 'quien', 'quien']

// console.log([...new Set(palabras)])


