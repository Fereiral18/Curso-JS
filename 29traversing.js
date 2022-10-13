// DOM traversing o atravesar el dom

// nos ubicamos en el nodo y nos movemos de arriba u abajo, en base al nodo que hemos determinado.

// Padre - parent (nodo del que desciende)

//     -parentNode - Devuelve el nodo padre(que puede no ser un elemento)
//     -parentElement - Devuelve el nodo elemento padre. 

//     Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolvera siempre null. 

// Hijos -child (Nodo que desciende de un padre)
//     -childNodes - Devuelve todos los nodos hijos 
//     -children - Devuelve todos los nodos elemntos hijos 
//     -firstchild - devuelve el primer nodo hijo
//     -lastChid - Devuelve el ultimo nodo hijo
//     -lastElementChild - Devuelve el ultimmo nodo elemento hijo 
//     -hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no tiene. 

// Hermanos - Siblings (nodo al mismo nivel)
//     -nextSibling - Devuelve el siguiente nodo Hermano
//     -nextElementSibling
//     -previousSibling
//     -PreviousElementSibling

// Cercano
//     -Closest(selector) - Selecciona el nodo mas cercano que cumpla con el selector, aun es experimental.

const parent = document.getElementById('parent')
const title = document.getElementById('title')
// console.log(parent.parentNode)
// console.log(parent.parentElement)

 console.log(parent.parentElement.parentElement)//--->Sube al padre 
 console.log(parent.parentElement)

 console.log(parent.childNodes) //-> \n es salto de linea en los nodos

 console.log(parent.children)--> //devuelve los nodos hijos sin saltos de linea

console.log(parent.firstChild) //--> Debe estar en la misma linea que el padre

console.log(parent.firstElementChild)
console.log(parent.lastElementChild)

console.log(parent.hasChildNodes())// -->parent que es el ul si tiene hijos

console.log(parent.firstChild.hasChildNodes()) // se uso con el firstChild y ese nodo no tiene hijos.


// Seleccion hermanos----------------------

console.log(parent.parentElement.nextElementSibling)//--> next(buscar hermanos hacia abajo)
console.log(parent.parentElement.previousElementSibling)//-> previous (buscar hermanos hacia arriba)



