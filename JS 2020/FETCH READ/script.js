const buttonImg = document.getElementById('button-img')
const buttonPdf = document.getElementById('button-pdf')

buttonImg.addEventListener('click',()=>{
    fetch('1.jpg')
    // .then(res=>console.log(res))
    .then(res=>res.blob())
    .then(img=>{
        document.getElementById('img').src = URL.createObjectURL(img)
    })
})

buttonPdf.addEventListener('click',()=>{
    fetch('Certificate.pdf')
    .then(res=>res.blob())
    .then(pdf=>{
        document.getElementById('pdf').href = URL.createObjectURL(pdf)
    })
})
