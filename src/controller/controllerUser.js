
const users=[
    {
     id: 1, 
      name: 'usuario1', 
      email: 'usuario1@mail.com', 
      creado: '2023-01-01'
     },
     {
       id: 2, 
       name: 'usuario2', 
       email: 'usuario2@mail.com', 
       creado: '2023-01-01'
     },
     {
     id: 3, 
     name: 'usuario3', 
     email: 'usuario3S@mail.com', 
     creado: '2023-01-01'
     },   
 ]
 
 export const getUsers=(request,response)=>{
    response.status(200).send({users})
 }

 export const UserById=(request, response)=>{
    const userId=request.params.idUser
    console.log(request.body)
    const search= users.find(user=>
      user.id==userId )
      console.log(search)
      response.status(200).send({...search})
    
    
 }