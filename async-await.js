const empleados = [
    {
        id: 1,
        nombre: 'Alejandro'

    },
    {
        id: 2,
        nombre: 'Donatello'

    },
    {
        id: 3,
        nombre: 'Yoda'

    }
];

const salarios = [
    {
        id: 1,
        salario: 30000

    },
    {
        id: 2,
        salario: 50000

    },
    {
        id: 3,
        salario: 300001

    }
];



const getEmpleadoById = (id) => {

    const empleado = empleados.find((e) => e.id == id)?.nombre
    // return (empleado)? callback(null,empleado): callback(`empleado no existe ${id}`);

    return promesa = new Promise((resolve, reject) => {
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`empleado no existe ${id}`)
        }
    })

}

const getSalarioById = (id) => {

    const salario = salarios.find((s) => s.id == id)?.salario
    return promesa = new Promise((resolve, reject) => {
        if (salario) {
            resolve(salario);
        } else {
            reject(`salario no existe ${id}`)
        }
    })
}

const getInfoUsuario = async (id) => {
 try {
    const empleado = await getEmpleadoById(id)
    const salario = await getSalarioById(id)
    return `Empleado: ${empleado} tiene un Salario de: ${salario}`;

 } catch (error) {
     throw error;
 }

}
getInfoUsuario(9).then(msg => console.log(msg)).catch(err=>console.log(err))