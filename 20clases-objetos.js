// Crea una clase libro
// la clase libro tendra titulo, autor, año y Genero.
// crea un metodo que devuelva toda la informacion del libro. 
// Pide 3 libros y guardalos en un Array. 
// Los libros se introduciran al arrancar el programa pidiendo
// los datos con prompt. 
// Validar que los campos no se introduzcan vacios. 
// Validar que el año sea un numero y que tenga cuatro digitos
// Validar el genero que sea: aventuras, terror o fantasia. 
// Crea una funcion que muestre todos los libros 
// Crea una funcion que muestre los autores ordenados alfabeticamente 
// Crea una funcion que pida un genero y muestre la informacion de los libros 
// que pertenezcan a ese genero usando el metodo que devuelve la informacion. 



class Libro{
    constructor(titulo,autor,año,genero) {
    this.titulo = titulo
    this.autor = autor
    this.año = año
    this.genero = genero

    
    }
    getAutor (){
        return this.autor
    }

    getGenero(){
        return this.genero
    }

    libroInfo(){
        return `${this.titulo} es un libro de ${this.genero} escrito por ${this.autor} en el año ${this.año}`
    }
}

let libros = []

while(libros.length<3){
    let titulo= prompt('introduce el titulo del libro')
    let autor=prompt('introduce el nombre del autor')
    let año=prompt('introduce el año del libro')
    let genero=prompt('introduce el genero del libro').toLowerCase()

    if(titulo != '' && autor != '' && !isNaN(año) && año.length == 4 && (genero == 'aventura' || 'terror' || 'fantasia')){
      
        libros.push(new Libro(titulo,autor,año,genero))
    }
}

const mostrarLibros= () => {
    console.log(libros)
}

const mostrarAutor = () =>{
    let autores =[]

    for(const libro of libros){
        autores.push(libro.getAutor())
    }
    console.log(autores.sort())
}

const mostrarGenero= () =>{
    const genero = prompt('introduce el genero a buscar')

    for(const libro of libros){
        if(libro.getGenero() == genero){
            console.log(libro.libroInfo())

        }
    }
    
}

// mostrarAutor()
// mostrarLibros()
mostrarGenero()



