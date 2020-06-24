const numeros = ['15','4','10','10','2']
const preguntas = ['Amazon','ML','Shein','amazon','aMAZON'.toLocaleLowerCase()] //para poder acceder a una palabra mal escrita
//usamos el lowercase

//devuelve un filtrado de los numeros o coincidencias dentor del array
console.log(numeros.filter(numero => numero==10))

console.log(preguntas.filter(pregunta => pregunta=='amazon')) //buscara palabras iguales