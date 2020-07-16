//un callback es una fucntion que se ejecuta a traves de otra funcion
//no son asincronos

// const getUser = (id,cb)=>{
//     const user = {
//         name : 'David',
//         id: id
//     }

//     if(id == 2) cb ('User not exists')
//     else cb (null,user)
// }

// getUser(1,(err,user)=>{
//     if(err) return console.error(err)
//     else console.log(`User name is: ${user.name} `)

// })

const users = [
    {
        id: 1,
        nombre : 'David Cruz Escobar'
    },{
        id: 2,
        name : 'Johnathan Mancilla Front Developer'
    },{
        id: 3,
        name : 'Daniel Torres Dark Backend'
    }
]

const emails = [
    {
        id : 1,
        email : 'DCE@@gmail.com'
    },{
        id : 2,
        email : 'JMFD@gmail.com'
    },{
        id : 3,
        email : 'DTDB@gmail.com'
    }
]

const getUser = (id)=>{ //se borra callback por cambio de promesa 15/7/20
    const user = users.find(user=>user.id==id)
    return promise = new Promise((resolve, reject)=>{
        
        if(!user) reject(`Not exists a user with id ${id}`) // if(user==undefined) o !user
        else resolve(user)

    }) //anadimos constructor
    
    //devolvemos la promesa
    // return promise if we want to request it here
}

const getEmail = (user)=>{
    const email = emails.find(email=>email.id == user.id)
    return promise = new Promise((resolve, reject)=>{
        
        if(!email) reject(`${user.name} hasn't an email`) // if(user==undefined)
        else resolve({
            id:user.id,
            name : user.name,
            email : email.email
        })
    })
}

//callback function
getUser(1)
//para leer contenido de las promesas necesitamos un metodo

getUser(2)
    .then(user=>
       getEmail(user)
    )//correr lo que sirve
    //respuesta de la promesa anterior
    .then(res=>console.log(res))
    .catch(err=>console.log(err))  //tomar los errores

// if(err) return console.log(err)
//     // console.log(user)
//     getEmail(user,(err,res)=>{
//         if(err) return console.log(err)
//         console.log(res);
//     })