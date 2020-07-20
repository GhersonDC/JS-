const button = document.getElementById('button')

button.addEventListener('click', () => {
    const newPost = {
        title: 'A new post',
        body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
})

// fetch('https://rickandmortyapi.com/api/character/')
// .then(res=>res.ok ? Promise.resolve(res) : Promise.reject(res))

// .then(res => res.json())
// .then(res=> {
//     const lista = document.getElementById('lista')
//     const fragment = document.createDocumentFragment()

//     for(const datos of res.results){

//         const li = document.createElement('LI')
//         li.textContent = `${datos.name} - ${datos.species}`
//         fragment.appendChild(li)
//     }
//     lista.appendChild(fragment)
// })