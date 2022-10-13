// DOM - Crear e insertar elementos

// Crear un elemento; document.createElement(elemento)
// Escribir texto en un elemento: element.textContent = texto
// Escribir HTML en un elemento: element.innerHTML = codigo HTML

// añadir un elemento al DOM parent.appendChild(element)
// fragmento de codigo: document.createDocumentFragment()

const days = ['Lunes','Martes','Miercoles', 'Jueves','Viernes', 'Sabado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('selectDays')

// const itemList = document.createElement('li')
// itemList.textContent = 'Lunes'

// daysList.appendChild(itemList)

title.innerHTML = 'DOM - <span>Crear e insertar elementos</span>'

const fragment = document.createDocumentFragment()

// for(day of days){
//  const itemList = document.createElement('li')
//  itemList.textContent = day
//  fragment.appendChild(itemList) 
// }

for(day of days){
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
   }
// appendChild(fragment)

// daysList.appendChild(fragment)
selectDays.appendChild(fragment)




