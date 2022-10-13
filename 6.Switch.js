// switch (evaluacion) { 
//     case valor1: 
//         //codigo
//        break;
//     case valor2: 
//         //codigo
//         break;
//     case valor3: 
//         //codigo
//         break;
//     default: 
//        //codigo
// }
// Sintaxis multiple:
// switch(evaluacion){
//     case n:
//     case n2:
//     case n3:
//     case n4:
//      //codigo
//      break;
              
//     default:
//     //codigo
// }

let num = 4.5;

switch(num){
    case 1 : 
        console.log(`${num} tiene el valor 1`);
    break
    case 2 : 
        console.log(`${num} tiene el valor 3`);
    break
}

switch(num){
    case 1:
        case 3:
            case 5:
                console.log(`${num} es impar`)
                break
                case 2:
                    case 4:
                        console.log(`${num} es par`)
                        break
                        default:
                            console.log(`${num} no es ninguna de las requeridas`)
}