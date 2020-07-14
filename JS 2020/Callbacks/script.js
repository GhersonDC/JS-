//un callback es una fucntion que se ejecuta a traves de otra funcion
//no son asincronos

const getUser = (id,cb)=>{
    const user = {
        name : 'David',
        id: id
    }
    if(id == 2) cb ('User not exists')
    else cb (null,user)
}

getUser(1,(err,user)=>{
    if(err) return console.error(err)
    else console.log(`User name is: ${user.name} `)

})