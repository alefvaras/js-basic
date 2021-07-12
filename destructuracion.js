const user={
    nombre:'Alejandro',
    apellido:'Fernandez',
    profesion:'programador',
    getNombre(){
        return `${this.nombre} ${this.apellido}`;
    }


}


const {nombre,apellido,profesion, edad=33} =user;

//console.log(nombre,apellido,profesion,edad);

 function printUser( {nombre,apellido,profesion, edad=33}=user) {
   // const {nombre,apellido,profesion, edad=33} =user2;

    console.log(nombre,apellido,profesion,edad);
}


printUser(user)


const heroes=['Batman', 'Superman','Linterna verde'];
//const h1=heroes[0]

//const [ h1,h2,h3]=heroes;

const [ ,,h3]=heroes;

console.log(h3);
