//// Crear un elemento document.createElement
//crear un elemento es como crear una etiqueta
const days = ['Lunes','Martes','Miercoles','Jueves','Viernes']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

// const itemList = document.createElement('li')

//anadir contenido
//se anade con textcontent

// itemList.textContent = 'Lunes';

// console.log(itemList)

//nos faltaria anadir a la lista hijo padre

// daysList.appendChild(itemList)

//-------------------------------

// title.textContent = 'DOM <span>Crear e insertar elementos I</span>' // cuando tengo etiquetas dentro usamos inner
title.innerHTML = 'DOM <span>Crear e insertar elementos I</span>'   //siempre usar textcontent en lugar de text

//fragment document
// funciona inyectando todo de una vez

const fragment = document.createDocumentFragment()

// for(const day of days){
// //    itemList.innerHTML += `<li>${day}</li>` // de esta manera se sobrecarga el navegador por lo que hay que utilizar documentFragment
//    const itemList = document.createElement('li')
//    itemList.textContent = day
//    fragment.appendChild(itemList)
// }

// console.log(fragment)
// daysList.appendChild(fragment)

for(const day of days){
    const selectItem = document.createElement('option')
    selectItem.setAttribute('value',day.toLowerCase)
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment)