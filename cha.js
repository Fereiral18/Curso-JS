//Sumar dos valores sin usar el valor aritmetico de +

const add = (x,y) =>{
    while(y !=0)
    {
        let suma = x & y
        x = x ^ y
        y = suma << 1;
    }
    return x
}

console.log(add(15,18))