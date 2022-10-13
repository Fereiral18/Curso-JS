// Condicional Simple

// if (numero>0){
//  console.log(`${numero} es mayor que 0`);
// }
// else{
//     console.log(`${numero} es menor que 0`)
// }
// condicionales multiples
// if (numero>0){
//        console.log(`${numero} es mayor que 0`);
//    }
//    else if(numero<0){
//        console.log(`${numero} es menor que 0`);
//    }
//    else{
//        console.log(`${numero} es igual a 0`);
//    }

// Operadores logicos
// let numero1 = 0;
// let numero2 = 0;
// && and
// || o

// if(numero1>0 || numero2>0){
//     console.log(`${numero1} y ${numero2} son mayores que cero`);

// }
// anidar; es meter if dentro de otro if
// If y else se utiliza para determinar todos los casos posibles

// if(numero1>0){
//     if(numero2>0){
//         console.log(`${numero1} y ${numero2} son mayores que 0`)
//     }else if(numero2<0){
//         console.log(`${numero1} es mayor que 0 y numero 2 es menor que 0`)
//     }else{
//         console.log(`${numero1} es mayor que 0 y numero 2 es igual a 0`)
//     }

// }else if(numero1<0){
//     if(numero2>0){
//         console.log(`${numero1} es menor que 0 y ${numero2} es mayor que 0`)
//     }else if (numero2<0){
//         console.log(`${numero1} y ${numero2} son menores que 0`)
//     }else{
//         console.log(`${numero1} es mayor que 0 y numero2 es igual a 0`)
//     } 
// }else{
//     if(numero2>0){
//         console.log(`${numero1} es igual 0 y ${numero2} es mayor que 0`)
//     }else if (numero2<0){
//         console.log(`${numero1} es igual a 0 y ${numero2} es menor que 0`)
//     }else{
//         console.log(`${numero1} y ${numero2} son iguale a 0`)
//     }
// }

// abc = 123
// acb = 132
// bac = 213
// bca = 231
// cab = 312
// cba = 321

const numbers = document.getElementById("numbers")
const result = document.getElementById("result")

let a = prompt("Introduzca el primer numero")
let b = prompt("Introduzca el segundo numero")
let c = prompt("Introduzca el tercer numero")

numbers.textContent = `Los numeros introducidos son ${a}, ${b}, ${c}`

if(a>=b && a>=c){
    if(b>c){
        result.textContent = `El orden es ${a}, ${b}, ${c}`
    }
    else{
        result.textContent = `El orden es ${a}, ${c}, ${b}`
    }
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent = `El orden es ${b}, ${a}, ${c}`
    }
    else {
        result.textContent = `El orden es ${b}, ${c}, ${a}`
    }
}else if(c>=a && c>=b){
    if(a>b){
        result.textContent = `El orden es ${c}, ${a}, ${b}`  
    }
    else{
        result.textContent = `El orden es ${c}, ${b}, ${a}` 
    }
}
