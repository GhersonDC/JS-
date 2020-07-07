const button = document.getElementById('button')

button.addEventListener('click',()=>{
    
    let xhr;

    if(window.XMLHttpRequest)
        xhr = new XMLHttpRequest()
    else
        xhr = new ActiveXObject('Microsoft.XMLHttp')
    
    
    xhr.open('GET','https://rickandmortyapi.com/api/character/');
    
    xhr.addEventListener('load',(data)=>{
        const jsonData = JSON.parse(data.target.response)
        console.log(jsonData.results)
        const lista = document.getElementById('lista');

        for(let datos of jsonData.results){

            const li = document.createElement('LI');
            li.textContent = `${datos.name} - ${datos.species}`;
            lista.appendChild(li);

        }
    })

    xhr.send();
})




