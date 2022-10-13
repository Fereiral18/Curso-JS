let cadena = 'Hola Mundo'

console.log(cadena.length);
// Length devuelve una cadena nueva, pero contando sus caracteres

console.log(cadena.toUpperCase());

console.log(cadena.toLowerCase());

console.log(cadena.indexOf('o'));
// IndexOf da la posicion del caracter en Numeros

console.log(cadena.replace('Mundo', 'Youtube'));

console.log(cadena.substring(3,7));

console.log(cadena.slice(-3))

let cadena2 = '         Hola youtube, estamos trabajando con cadenas';
console.log(cadena2.trim());
// Esta propiedad quita todos los espacios del principio y final

console.log(cadena.startsWith('H'))
console.log(cadena.startsWith(2))

console.log(cadena.endsWith('a',4))
console.log(cadena.endsWith('n',8))
console.log(cadena.endsWith('Mundo'))

console.log(cadena.includes('n'))

let cadena3 = 'Hola'

console.log(cadena3.repeat(3))

let nombre = 'Luis';
let apellido = 'Fereira';
let edad = 25;

console.log('Hola ' + nombre + " " + apellido + ". Tienes " + edad + " años.");

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${(edad)+1} años.`);

