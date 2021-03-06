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
        nombre : 'David'
    },{
        id: 2,
        name : 'Johnathan'
    },{
        id: 3,
        name : 'Daniel'
    }
]

const emails = [
    {
        id : 1,
        email : 'DC@@gmail.com'
    },{
        id : 2,
        email : 'JM@gmail.com'
    }
]

const getUser = (id,cb)=>{
    const user = users.find(user=>user.id==id)
    if(!user) cb(`Not exists a user with id ${id}`) // if(user==undefined)
    else cb(null, user)

}

const getEmail = (user,cb)=>{
    const email = emails.find(email=>email.id == user.id)
    if(!email) cb(`${user.name} hasn't an email`) // if(user==undefined)
    else cb(null,{
        id:user.id,
        name : user.name,
        email : email.email
    })
}

//callback function
getUser(3,(err, user)=>{
    if(err) return console.log(err)
    // console.log(user)
    getEmail(user,(err,res)=>{
        if(err) return console.log(err)
        console.log(res);
    })
})