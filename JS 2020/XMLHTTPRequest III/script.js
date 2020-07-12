const form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    sendData(form)
})

const sendData = (data)=>{
    let xhr
    if(window.XMLHttpRequest) xhr =  new XMLHttpRequest()
    else xhr =  new ActiveXObject("Microsoft.XMLHTTP")

    //abrir coneccion
    xhr.open('POST','marvel.php')
    const formData = new FormData(data)
    //enviar datos
    xhr.send(formData)
}