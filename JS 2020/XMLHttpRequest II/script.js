const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    getData(characters.children[characters.selectedIndex].value)
})

const getData = (id)=>{
     let xhr;

     if(window.XMLHttpRequest)xhr = new XMLHttpRequest()
     else xhr = new ActiveXObject("Microsoft.XMLHTTP")
     
     if(id==undefined){

         xhr.open('GET',`marvel.php`);

         xhr.addEventListener('load',(data)=>{
             const JSONdata = JSON.parse(data.target.response)
             console.log(JSONdata)
         
         const fragment = document.createDocumentFragment()

         for(const heroes of JSONdata){
             const option = document.createElement('OPTION')
             option.setAttribute('value',heroes.ID)
             option.textContent = heroes.Name 
             fragment.append(option)
         }
         characters.append(fragment)
        })
     }
     else{
         xhr.open('GET',`marvel.php?id=${id}`);

         xhr.addEventListener('load',(data)=>{
             const JSONdata = JSON.parse(data.target.response)
             console.log(JSONdata)
         
         const fragment = document.createDocumentFragment()

         for(const heroe of JSONdata){

             const row = document.createElement('TR')
             const dataName = document.createElement('TD')
             const dataAlignment = document.createElement('TD')
             const dataHometown = document.createElement('TD')
             const dataGender = document.createElement('TD')
             const dataFighting = document.createElement('TD')
             dataName.textContent = heroe.Name
             dataAlignment.textContent = heroe.Alignment
             dataHometown.textContent = heroe.Hometown
             dataGender.textContent = heroe.Gender
             dataFighting.textContent = heroe.Fighting
            
             row.append(dataName)
             row.append(dataAlignment)
             row.append(dataHometown)
             row.append(dataGender)
             row.append(dataFighting)

             fragment.append(row)
         }
         table.append(fragment)
     })
    }
    xhr.send();
}

getData();