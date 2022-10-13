// Una promesa es un objeto que tiene dentro 2 callbacks internos..
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

const getUser = (id) =>{
    const user = users.find(user=>user.id == id)
    const promise = new promise((resolve, reject)=>{
        if(!user) reject(`not exist a user whith id ${id}`)
        else resolve(user)

    })
    return promise
}
const getEmail = (user, cb) =>{
    const email= emails.find(email=>email.id==user.id)
    if(!email)cb(`${user.name} hasn't email`)
    else cb(null,{
        id: user.id,
        name:user.name,
        emails: email.email
    })
}

getUser(1).then(user => console.log(user))  //---> el metodo .then resuelve todo lo que hay en la promesa


// if(!user)return console.log(err)

// getEmail(user, (err,res)=>{
//     if(err) return console.log(err)
//     console.log(res)
// })