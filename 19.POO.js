// Programacion orientada a objetos

// Es un paradigma de la programacion que actualiza la forma de programar anterior. 

// Alguno de los conceptos fundamentales de la programacion orientada a objetos es:

// clase
// herencia
// objeto 
// metodo 
// evento 
// etc 

// Cuando creamos un objeto a esa accion se le denomina instaciar un objeto

// las clases necesitan una funcion constructora. Se le ejecuta cada ve que ejecutamos al objeto. 

// class Persona{

//     constructor(nombre, apellido, edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad

//         this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad}}`
//     }
//     saludar(){
//             return `Hola, me llamo ${this.nombre} y tengo ${this.edad}`
//     } 

// }

// const juan = new Persona('Luis','Fereira', 25)
// const crisbell = new Persona('crisbell', 'leal', 22)

// console.log(juan)
// console.log(juan.saludar())    

class Pan{
    constructor(nombre, apellido, frances, lambada, bolita){
        this.nombre=nombre
        this.apellido=apellido
        this.frances=frances
        this.bolita=bolita
        this.lambada=lambada
        

        this.referencia= `Hola ${nombre} eres un excelente cliente, te gusta mucho la ${lambada} y ${frances} pero muy poco la ${bolita}`
}
    pregunta(){
        return `Te gustan mucho los panes ${this.frances} y ${this.lambada}`
    }
}

const Luis = new Pan('Luis','Fereira','frances', 'lambada', 'bolita')

console.log(Luis)
console.log(Luis.pregunta())

// this hace referencia al objeto

// nombre del objeto = nombre del parametro
// apellido del objeto = apellido del parametro
// edad del objeto = edad del parametro

// Se le pueden asignar propiedad que no haya en los parametros. pero siempre utiliando this para referenciar al objeto.
// this.datos = `${nombre} ${apellido} ${edad}`

// Los objetos pueden tener funciones asociadas a el o metodos.

// dentro de la clase fuera del constructor.

