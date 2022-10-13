// Arrays - Metodos II 

// .from (iterable) - convierte en array el elemento iterable. 

// .sort ([callback]) - ordena los elementos de un array alfabeticamente (valor unicode),
// si le pasamos un callback los ordena en funcion del algoritmo que le pasemos. 

// .forEach (callback(currentValue, [index])) - ejecuta la funcion indicada una vez por cada elemento del array.

// .some(call back) - comprueba si al menos un elemento del array cumple la condicion.

// .every(callback) comprueba si todos los elementos del array cumplen la condicion

// .map (callback) transforma todos los elementos del array y devuelve un array 

// .filter(callback) filtra todos los elementos del array que cumplan la condicion y devuelve un nuevo array

// .reduce(callback) reduce todos los elementos del array a un unico valor

// let word = 'hola mundo'

// console.log(Array.from(word))
// console.log(word.split(" "))

// Sort ----------------------------------

        // const letras = ['b', 'd', 'z', 'a']
        // const numeros = [1,8,100,300,3]

        // console.log(letras.sort())
        // console.log(numeros.sort())
        // console.log(numeros.sort((a,b)=>a-b))

        // ejercicio-------------- 


        // function menorMayor(a,b){
        //     if(a-b <0) return -1;
        //     if(a-b >0) return 1;
        //     if(a==b) return 0
        // }

        // function mayorMenor(a,b) {
        //     if(b-a < 0) return -1
        //     if(b-a>0) return 1
        //     if(b==a) return 0
        // }


         // const palabra = 'Hola como te va' //----> cadena

         // console.log(Array.from(palabra))
         // console.log(palabra.split(" ")) //-----> el resultado entre [] es matriz = Arrays
//forEach -------------------------------

        // const numeros = [12,25,47,84,94]

        // numeros.forEach((numeros)=>console.log(numeros))
        // numeros.forEach((numeros,index) =>
        // console.log(`${numeros} esta en la posicion ${index}`))

         // const newVariable = [20,30,20,10]

         // newVariable.forEach((newVariable,index)=>
         //    console.log(`En este orden numero ${newVariable} se puede apreciar la posicion array de cada uno la cual es ${index}`))
         
         
       

//Some-//every-----------------------------------------------------------------------
        // const word = ['HTML','CCS', 'JAVASCRIPT', 'PHP']

        // console.log(word.some(word => word.length>10));

        // const numeros = [12,25,47,84,94]

        // const numero2 = numeros.map((numero)=> numero*2)

        // console.log(numero2)

      //   const work = ['programador', 'herrero', 'mantenido', 'futbolista']

      //   console.log(work.some(work=>work.length>5))//----> comprueba si las propiedad que pasamos se cumple o no

//filter---------------
        // const numeros = [12,25,47,84,94]

        // const numeros2 = numeros.filter(numero=>numero>40)
        // console.log(numeros2)

      //   const numeros = [30,20,50,60,70]
      //   const numeros2 = numeros.filter(numeros=>numeros>60)
      //   console.log(numeros2)
//Reduce------------------
// console.log(numeros.reduce((a,b)=> a+b))

// const user=[
//     {
//        name:'user 1',
//        online: true 
//     },
//     {
//         name:'user 2',
//         online: true 
//      }, {
//         name:'user 3',
//         online: false 
//      }, {
//         name:'user 4',
//         online: true 
//      }, {
//         name:'user 5',
//         online: false 
//      }, {
//         name:'user 6',
//         online: true 
//      },
// ]

// const userOnline = user.reduce((cont, user)=> {
//     if(user.online) cont++
//     return cont
// },0)

// console.log(`hay ${userOnline} usuarios conectados`)

// Ejercicio francisco---------------

//Escriba una función para dividir una cadena y convertirla en una matriz de palabras.
// const cadena=(CadenaADividir)=> {
//         return CadenaADividir.split(" ");    
// }


// console.log(cadena("Hola mundo maracaibo"))

//queremos una matriz, pero no cualquier matriz antigua, una matriz con contenido
//escribe una funcion que produzca una matriz con los numeros 0 hasta n.







