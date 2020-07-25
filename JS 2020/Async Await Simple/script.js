const getName = async () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Dorian')
        },1500)
    })
}

getName()
.then(name=>console.log(name))


const sayhello = async ()=>{
    const name = await getName()
    return `Hello ${name}`
}

sayhello().then(res=>console.log(res))