// setTimeout(() => {
//     console.log('hola')
// }, 2000);

const getUserById=(id, callback )=>{

//redundante
// const user ={
//     id:id
// }

const user ={
    id,
    nombre:'Alejandro'
}
// setTimeout(() => {
//     console.log(user)
// }, 2000);

setTimeout(() => {
    callback(user)
}, 2000);

}

// getUserById(5,(user) =>{
//     console.log(user.nombre)
// });

const empleados =[
    {
        id:1,
        nombre:'Alejandro'

    },
    {  id:2,
        nombre:'Donatello'

    },
    {  id:3,
        nombre:'Yoda'

    }
];

const salarios =[
    {
        id:1,
        salario:30000

    },
    {  id:2,
        salario:50000

    },
    {  id:3,
        salario:300001

    }
];

// const getEmpleadoById = (id)=>{

//       const empleado = empleados.find( (e) => {
//       return   e.id==id
         
//     } )

//     return empleado;
// }

const getEmpleadoById = (id, callback)=>{

    const empleado = empleados.find( (e) =>  e.id==id) 
    return (empleado)? callback(null,empleado): callback(`empleado no existe ${id}`);

       
  } 

//console.log(getEmpleadoById(5));
getEmpleadoById(4,(err,empleado)=>{

    if(err){
        console.log('ERROR')
        return console.log(err)
    }
    console.log(empleado)
})

const getSalarioById = (id, callback)=>{

    const salario = salarios.find( (s) =>  s.id==id) ?.salario
    return (salario)? callback(null,salario): callback(`salario no existe ${id}`);

       
  } 

  getSalarioById(2,(err,salario)=>{

    if(err){
        console.log('ERROR')
        return console.log(err)
    }

    console.log(salario)


  })