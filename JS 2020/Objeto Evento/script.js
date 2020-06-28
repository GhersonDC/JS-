// addEventListener('click',(e)=>{ //es lo mismo que tener windows.addEvent...
//     console.log(e)
// })


const input = document.getElementById('input')
const button = document.getElementById('button')
const gallery = document.getElementById('gallery')

gallery.addEventListener('click',(e)=>{
   e.target.classList.add('blue')
})

input.addEventListener('keyup',(e)=>{ //Detecta que pulso dentro del elemento seleccionado
console.log(e.key)
console.log(e.explicitOriginalTarget.attributes[0].nodeValue)
})

input.addEventListener('click',(e)=>{ //Detecta el click donde pulse
    console.log(e)
})

//Aqui asignamos un valor a otro elemento con un evento
button.addEventListener('click',(event)=>{
    event.preventDefault()
    input.value = 'Input ha sido llenado'
})

