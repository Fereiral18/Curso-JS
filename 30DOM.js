// Insertar y eliminar elementos II

// parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia. 

// SOPORTE TOTAL 
// parent.insertAdjacentElement(position, element)
// parent.insertAdjacentHtml(position, HTML)
// parent.insertAdjacentText(position, Text)

// positions

//     beforebegin-> Antes de que empiece(hermano anterior)
//     afternegin-> Despues de que empiece(primer hijo)
//     beforeend-> antes de que acabe(ultimo hijo)
//     afterend-> despues de que acabe(hermano siguiente)

// parent.replaceChild(newChild, oldchild) - Reemplaza un hijo por otro 

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new Element"

list.insertBefore(newElement, list.children[0])

list.children[0].insertAdjacentElement('beforebegin', newElement)
list.insertAdjacentElement('afterbegin', newElement)
list.insertAdjacentElement('beforeend', newElement) //--> final del elemento en este caso es la ul
list.children[0].insertAdjacentElement('afterend', newElement)

list.children[0].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')

list.children[0].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')


// Reemplazar un hijo-----

list.replaceChild(newElement, list.children[0])

list.children[0].before(newElement)
list.prepend(newElement) //--> se coloca como primer hijo

list.append(newElement) //--> lo coloca de ultimo

list.children[1].after(newElement)//--> despues del hijo seleccionado
list.children[0].replaceWith(newElement) //--> elimina el hijo de la posicion que determinemos y agrega el otro, lo reemplaza

// document.getElementById('child-to-replace').replaceWith(newElement)

// clonar elementos--------------------

// Element.cloneNode (True|False) - Clona todo el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos. 

element.remove() //- Elimina el elemento del DOM
element.removeChild(child)// - Elimina el nodo hijo del DOM

list.after(list.cloneNode(true))
// list.remove()
list.removeChild(list.children[1])
