const numeros = [1,2,3,4,5,6,7,8,9,10]
//-------------------------
//Expandir el array
console.log(...numeros); //devuelve el valor del array en linea 

//--------------------------
//meter un array con otro array 
const numeros2 = [11,12,13,14,15]

// numeros.push(numeros2) //si lo introduzco asi mete un array dentro del array
// console.log(numeros)

numeros.push(...numeros2) //si lo introduzco asi mete el array dentro del array
console.log(numeros)

//--------------------------
//copiar arrays

let array1 = [1,2,3]
let array2 = [...array1]
console.log(array2)

//--------------------------
//parametros rest para recibir un numero indefinido
const restParam = (...numeros) =>{
    console.log(numeros)
}

restParam(50,60)

//--------------------------
//Libreria math
const arrayDuplex = [1,1,2,3,4,4,4,5]
console.log(Math.max(...arrayDuplex))


//--------------------------
//borrar elementos duplicados de array

console.log(...new Set(arrayDuplex))
