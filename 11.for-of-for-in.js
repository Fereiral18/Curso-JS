// let names = ["Carmen","Julia","Elita","La bobita"]
//  for of
// for(let name of names){
//     console.log(name)
// }
// 1era vuelta "Carmen"
// 2da vuelta "Julia"
// 3era vuelta "Elita"
// 4ta vuelta "La bobita"
// ----> El of imprime lo que esta dentro de la posicion,
// en este caso son los arrays nombres
// // // for in
// // for(let name in names){
// //     console.log(name)
// // }
// // 1era vuelta 0
// // 2da vuelta 1
// // 3era vuelta 2
// // 4ta vuelta 3 
// ----> el in imprime solo la posicion sin su contenido
// let names = ["Carmen","Julia","Elita","La bobita"]

// for(let name of names){
//     console.log(name)
// }
// for(let index in names){
//     console.log(names[index])
// }
// break rompe el bucle
// continue se salta las posiciones que le indiquemos

let names = ["Carmen","Julia","Elita","La bobita"]

for(let i = 0; i <names.length; i++){
    if(names[i]==="Elita"){
        continue
    }
    console.log(names[i]);
}

for(let name of names){
    if(name==="Elita"){
        continue
    }
    console.log(name);
}

for(let index in names){
    if(names[index]==="Elita"){
        continue
    }
    console.log(index)
}
