// un callback es una funcion que se ejecuta atraves de una funcion.
//los callbacks no son asincronos, se ejecutan por ordenes.

// const getUser = (id, cb) => {
//     const user = {
//         name : 'Luis fereira',
//         id: id
//     }
//    if(id !=1)cb(`User not exist`)
//    else cb(null,user)
// }
// getUser(1, (err, user)=>{
//     if(err) return console.log(err)
//     console.log(`User name is ${user.name}`)
// })



const users = [{
    id:1,
    name : 'Luis'
},
    {id:2,
    name :'crisbell'
},
    {id:3,
    name : 'carlos'

}]

const emails = [{
    id : 1,
    email : 'luis@gmail.com'
},
    {id : 2,
    email : 'crisbell@gmail.com'
}]

const getUser = (id,cb) =>{
    const user = users.find(user=>user.id==id)
    if(!user) cb (`User not exist ${id}`)

}
getUser(1)