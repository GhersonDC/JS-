const numeros = ['5','4','10','1']
const letras = ['X','A','L','B']

console.log(letras.sort()) //orderna las letras por unicode
console.log(numeros.sort( (a,b) => a-b) )