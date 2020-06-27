// const button = document.getElementById('button')

// //sirve para detectar click en un elemento
// button.addEventListener('click',()=>{
//     console.log('click')
// })

// //double click 
// button.addEventListener('dblclick',()=>{
//     console.log('doble click')
// })


// //MOUSE ENTER Y LEAVE 
// button.addEventListener('mousenter',()=>{
//     console.log('doble click')
// })

//MOUSE ENTER Y MOUSELEAVE 
//Funcionan como hover y la manera correcta es renombrar para usar clases desde css
//no agregar desde aqui
const box = document.getElementById('box')

box.addEventListener('mouseenter',()=>{
    box.classList.replace('red','blue')
})

box.addEventListener('mouseleave',()=>{
    box.classList.replace('blue','red')
})