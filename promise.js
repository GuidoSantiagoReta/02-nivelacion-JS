

//EJEMPLO DE EMPLEADO Y SUELDOS RESUELTO CON PROMESAS
/*PROMESAS: VIENEN A RESOLVER EL CONFLICTO DE LOS CALLBACKS, PARA NO TENER 
QUE PASAR UNA FUNCIÓN POR PARÁMETRO Y  ERRORES POR CALLBACK.

PROMESAS: NO RECIBEN MAS CALLBACKS , SOLAMENTE LOS PARAMETROS NECESARIOS. 
PERO VAMOS A DEVOLVER UN OBJETO PROMESA
la promesa recibe la funcion callback
se le suele poner resolve: para los casos OK y reject: para los casos de error
*/
const empleados =[
    {
        id: 1,
        nombre:'Jorge'
    },
    {
        id:2,
        nombre:'Maria'
    },
    {
        id:3,
        nombre:'Facundo'
    }
]

const sueldos= [
    {
        id:1,
        sueldo: 2000
    },
    {
         id:2,
         sueldo: 3000

    },
]

const getEmpleadoById = (id)=> {

    return new Promise((resolve, reject) =>{

        const empleado = empleados.find((e) =>e.id === id); //iterando el array uno por uno y ejecutando esa función por cada uno de los empleados, si se cumple la condición === lo va a devolver

        if(empleado){
            resolve(empleado);            //voy a hacer que ejecute  la funcio e pasada por parametro con el empleado con el empleado que encontre.
            return;
           }
        
        reject(`El empleado no existe para el id:${id}`);
         


    });
        
 }
 
 const getSueldoById = (id)=> {

    return new Promise((resolve, reject) =>{

        const sueldo = sueldos.find((s) =>s.id === id); //iterando el array uno por uno y ejecutando esa función por cada uno de los empleados, si se cumple la condición === lo va a devolver

        if(sueldo){
            resolve(sueldo);            //voy a hacer que ejecute  la funcio e pasada por parametro con el empleado con el empleado que encontre.
            return;
           }
        
        reject(`El sueldo no existe para el id:${id}`);
         


    });
        
 }


 const id =2;
 let nombre;

 getEmpleadoById(id)
      .then( empleado => {                   //then: funció asociada al objeto promesa, donde dentro vamos a tratar la respuesta del ok.
        nombre = empleado.nombre;
        return getSueldoById(id);            // retorno de la promesa para seguir concatenando acciones
     
      })

      .then( sueldo => console.log(`El empleado es ${nombre} y el sueldo es de ${sueldo.sueldo} `))
      .catch(err => console.log(err));                                  //caputrando el error
       

      