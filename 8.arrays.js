// Los arrays se conocen como elementos de listas
// Los arrays se cuentas desde la posicion 0


// let palabras = ["Hola","Yo soy", "Luis", "Fereira"]

// console.log(numeros[1]+numeros[2]);

// console.log(numeros);

// console.log(`La palabra "${palabras[1]}" tiene ${palabras[1].length} letras`)

// Arrays / Propiedades
//     Array.length Devuelve el numero de posiciones que contiene el array
        
//       Arrays / Metodos

//          Array.isArray Devuelve true si la variable es un array
        

//         Eliminar un elemento
//             .shift() Elimina el primer elemento del array y devuelve ese elemento
//             .pop() Elimina el ultimo elemento de un array y devuelve ese elemento

//         A;adir elementos 
//         .push (elelemto1, elemento2,...) a;ade uno o mas elementos al final del array y devuelve la nueva longitud
//         .unshift (elemento1, elemento2,...) a;ade uno o mas elementos al comienzo del array y devuelve la nueva longitud

let numeros = [1,2,3,4,5,1];
// console.log(numeros.length);
// console.log(Array.isArray(numeros))
// console.log(numeros);
// let deletElement = numeros.shift();
// console.log(numeros);
// console.log(deletElement)//Con deletElement podemos devolver el elemento eliminado
// numeros.pop()
// console.log(numeros)
// numeros.push(6) //con .Push sumamos otra variable al array
// console.log(numeros);
// let newLength = numeros.push("brasil", 1)
// console.log(numeros);
// let newLength2 = numeros.unshift("alemania","Portugal",0);
// console.log(numeros);

// .indexOf Devuelve el primer indice del elemento 
// que conincida con el valor especificado, o -1 si ninguno es encontrado.

// console.log(numeros);
// console.log(numeros.indexOf(1))

// lastIndexOf() Devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 
// si ninguno es encontrado

// console.log(numeros);
// console.log(numeros.lastIndexOf(5))

// Reverse Invierte el orden de los elementos
// console.log(numeros);
// numeros.reverse();
// console.log(numeros);

// .Join ("Separador que indiquemos")Devuelve un string con el separador que indiquemos
// por defecto con comas
// console.log(numeros);
// let arrayString = numeros.join(" ")
// console.log(numeros.join(" "));

// Splice(a, b, items) - cambia el contenido de un array eliminando
// elementos existentes y/o agregando nuevos elementos.
// a - indice de inicio 
// b - numero de elemento (opcional)
// items - Elemento a a;adir en el caso de que se a;adan 

// console.log(numeros)
// numeros.splice(3); elimina desde la posicion 3 hasta el final
// numeros.splice(1,4); elimina desde la posicion a hasta el numero de valores
// que le indiquemos
// numeros.splice(2,2,10,23,54) si b es un valor distinto de 0 elimina el numero de valores que indiquemos en b y a;ade 
// los valores de items apartir de la posicion a
// numeros.splice(2,0,10,23,54) si b vale 0 a;ade los elementos apartir de la posicion a 
// y no elimina ninguno
// console.log(numeros);

// .Slice(a,b) Extrae elementos de un array desde el indice a hasta el indice b.
// si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia
// original

// let newNumeros = numeros.slice(2);
// console.log(numeros);
// console.log(newNumeros);

//  let newNumeros = numeros.slice(2,4)
//  console.log(numeros);
//  console.log(newNumeros);