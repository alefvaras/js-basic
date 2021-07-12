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



const getEmpleadoById = (id)=>{

    const empleado = empleados.find( (e) =>  e.id==id) ?.nombre
   // return (empleado)? callback(null,empleado): callback(`empleado no existe ${id}`);

   return  promesa = new Promise((resolve,reject)=>{
       if(empleado){
           resolve(empleado);
       }else{
           reject(`empleado no existe ${id}`)
       }
   })
//return promesa;
       
  }  
//   getEmpleadoById(10).then(empleado=>console.log(empleado))
//   .catch(err=>console.log(err));

  const getSalarioById = (id)=>{

    const salario = salarios.find( (s) =>  s.id==id) ?.salario
   // return (empleado)? callback(null,empleado): callback(`empleado no existe ${id}`);

   return  promesa = new Promise((resolve,reject)=>{
       if(salario){
           resolve(salario);
       }else{
           reject(`salario no existe ${id}`)
       }
   })
}

// getSalarioById(2)
// .then(salario=>console.log(salario))
// .catch(err=>console.log(err));

// getEmpleadoById(2)
// .then(empleado=>{
//     getSalarioById(2)
//     .then(salario=>{
//         console.log(`Empleado: ${empleado} tiene un Salario de: ${salario}`)
//     }).catch(err=>console.log(err))
// }).catch(err=>console.log(err));

//promesas en cadenas

let nombre;
getEmpleadoById(1)
    .then(empleado=>{
        
        nombre=empleado;
        return getSalarioById(1);

    })
    .then(salario =>console.log(`Empleado: ${nombre} tiene un Salario de: ${salario}`))
    .catch(err=>console.log(err))