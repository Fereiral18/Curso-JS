// document.getElementById -> Acceder a un elemento atraves de su IdleDeadline. Es recomendable usar class para css y id para javascript

// document| element.querySelector('SelectorCSS') -> Accede al primer elemento que coincida con el selector de css.

// document.querySelectorAll('SelectorCSS') -> Accede a todos los elementos que coincidan con el selector CSS, devuelve el nodeList.

// const title = document.getElementById('title')
// title.textContent = 'Dom Acceder a los elementos'

// const title = document.getElementById('title')

// title.textContent = 'Dom - Accediendo a nodos'

// const paragraph = document.querySelector(".paragraph")
// const span = document.getElementById("section").querySelector("span")
// console.log(span.textContent) //----> selectores after y before no se accede desde javascripts al principio no de esta manera.

const paragraphs = document.querySelectorAll('.paragraph')

const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

// paragraphs[0].style.color = 'red'

// paragraphsSpread.map(p=>p.style.color='green')

paragraphsArray.map(p=>p.style.color='blue')
console.log(paragraphs)