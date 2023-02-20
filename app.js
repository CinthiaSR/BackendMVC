import express from 'express'
import  userRouter from'./src/routes/userRouter'

const app=express()
app.use(express.json())

// const users=[
//        {
//         id: 1, 
//          name: 'usuario1', 
//          email: 'usuario1@mail.com', 
//          creado: '2023-01-01'
//         },
//         {
//           id: 2, 
//           name: 'usuario2', 
//           email: 'usuario2@mail.com', 
//           creado: '2023-01-01'
//         },
//         {
//         id: 3, 
//         name: 'usuario3', 
//         email: 'usuario3S@mail.com', 
//         creado: '2023-01-01'
//         },   
//     ]
    


//req = peticion
//res= resultado o respuesta
// app.get('/',(request,response)=>{
//     response
//     .status(500)
//     .send({
//         message:'Bienvenidos a la API RESTful de la Generacion 23a'
//     })
// })

// app.get('/users',(request, response)=>{
//     response
//     .status(200)
//     .send(users)
// })
// app.post('/users', (request, response) => {
//     if (Object.entries(request.body).length === 0) {
//         response.status(400).send({ error: 'Solicitud invalida' })
//       }
//     const { name, email } = request.body
//     const newUser = {
//       id: users.length + 1,
//       name,
//       email,
//       creado: "2023-02-17"
//     }
//     users.push(newUser)
//     response.status(201).send(newUser)
//   })

app.use('/',userRouter)

app.listen(3000,()=>{
    console.log('servidor funcionando en el puerto 3000')
})