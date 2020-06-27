const label = document.getElementById('label')
console.log(label)

label.classList.add('label') // añade una clase
console.log(label)

// label.classList.remove('label') // remueve una clase
// console.log(label)

console.log(label.classList.contains('label')) // contiene una clase determinada o no y devuelve boolean


console.log(label.classList.replace('label','label1')) // modifica una clase existente recibe 2 parametros