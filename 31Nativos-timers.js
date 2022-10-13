const button = document.getElementById('button')


//objeto window - Es el objeto global, de el descienden todos los objetos.
    // alert()
    // prompt()
    // confirm()

// if(confirm('acepta?')){
//     console.log('El usuario acepto')
// }else{
//     console.log('no acepto')
// }

//objeto console. Es el objeto que contiene la consola del navegador

// console.log()
// console.dir()
// console.error()
// console.table()

const persona = {
        name: 'Luis',
        age : '25',
        email : 'Luis@gmail.com'
}

// console.table(persona)

// Objeto location - Es el objeto que contiene la barra de direcciones

    // location.href
    // location.protocol 
    // location.host 
    // location.pathname 
    // location.hash 
    // location.reload()

    // console.log(location.href) //-> devuelve la ubicacion
    // console.log(location.protocol) // -> devuelve el protocolo de la pagina
    // console.log(location.host)
    // console.log(location.pathname)
    // console.log(location.hash)

//objeto history

    // back()
    // forward()
    // go(n|-n)

    // length

// objeto date
// const date = new date()
// console.log(date)

//timers

// settimeout()=>{code}, delay-in-millisecond- hace que se ejecute la funcion despues del delay. Si le defirenciamos mediante una variable/constante podemos pararlo con clearTimeout(referncia)
// //Interval
// setInterval()=> {code} delay-in-miliseconds hace que se ejecute



// console.log(date)
//  con los timers se establece la ejecucion de la funcion despues de los milisegundos

button.addEventListener('click', ()=>{
    // setTimeout(saludar, 3000)
    const timeOut = setTimeout(()=>{
        console.log('ADIOS')
    },3000)
})



// const timeOut = setTimeout(()=>{
//             console.log('ADIOS')
//             },3000)

//             button.addEventListener('click', () =>{
//                 clearTimeout(timeOut)
//             })



// const saludar = () =>{
//     console.log('hola')
// }
// const intervall = setInterval(saludar, 3000);

let cont = 0

const interval = setInterval(()=>{
    console.log(cont)
    cont++
},1000)

button.addEventListener('click', () =>{
     clearTimeout(interval)
            })