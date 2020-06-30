const optionLorem = document.getElementById('optionLorem')
const optionIpsum = document.getElementById('optionIpsum')


var users = ['Andrew Jackson','Abraham Lincoln','Thomas Jefferson']
var party = ['Republican Party','Democratic Party','Third one']

var fragment = document.createDocumentFragment()

for(let usuarios of users){
    let preparador = document.createElement('option')
    preparador.setAttribute('option', preparador)
    preparador.textContent = usuarios
    fragment.appendChild(preparador)
}
optionLorem.appendChild(fragment)

for(let parties of party){
    let preparador = document.createElement('option')  // creamos el elemento
    preparador.setAttribute('option',preparador)       //definimos un atributo
    preparador.textContent = parties                  //insertamos texto
    fragment.appendChild(preparador)                   //Heredamos datos con informacion
}

optionIpsum.appendChild(fragment)                      //Insertamos el fragmento 



const title = document.getElementById('title')
const subtitle =  document.getElementById('subtitle')

const smallText = document.createElement('h5')
smallText.textContent = 'According to Forbes'

title.textContent = 'This is an example'

subtitle.appendChild(smallText)