/*fundamental saber asincronismo en js*/



//definiendo objetos

const empleados =[
    {
        id: 1,
        nombre:'Jorge'
    },
    {
        id:2,
        nombre:'maria'
    },
    {
        id:3,
        nombre:'facundo'
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

/* EJERCICIO: funcion que reciba como parametro un callback y que devuelva el
 id del empleado en la función callback */
 /* a (e) le paso una función callback y e en la funcion callback le va a
 pasar como parametro primero el objeto id:1, luego id:2, luego id:3 */

 

 const getEmpleadoById = (id,callback)=> {

    const empleado = empleados.find((e) =>e.id === id); //iterando el array uno por uno y ejecutando esa función por cada uno de los empleados, si se cumple la condición === lo va a devolver

     if(empleado){
         callback(null, empleado);            //voy a hacer que ejecute  la funcio e pasada por parametro con el empleado con el empleado que encontre.
         return;
        }
     
     callback(new Error("El empleado no existe"))
    
     
 }

 //ejecución de la función getEmpleadoById
 const id =1;

 getEmpleadoById(id, (error,empleado) => {    // si tengo el error el primer parametro le va a pasar el error, y si no hago algo  con el objeto que quiero
       if(error){
           console.log('ERROR!!');
           console.log(error);
           return;
       }
       

    
    console.log(`El empleado: ${empleado.nombre}...`);
       

 });

