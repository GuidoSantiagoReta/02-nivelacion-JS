
/* CUANDO NOSOTROS SABEMOS QUE TENEMOS POR PARAMETRO UN CALLBACK O DEVOLVEMOS UNA PROMESA, 
SABEMOS QUE ES UNA FUNCIÓN ASÍNCRONA(la definimos como asincrona)
async:LE DECIMOS A JS QUE ES UNA FUNCIÓN ASINCRONA AL PONER ASYNC PJS
 DEVUELVE UNA PROMESA. no usamos promesa pero usamos try catch:   */


//BASE DE DATOS
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
//FIN BASE DE DATOS



/*PRIMER FUNCIÓN ASINCRONA QUE DEVUELVE UNA PROMESA 

1-BUSCAMOS UNA EMPLEADO(getEmpleadoById)por el id
que nos pasan por parámetro. 

2-el try y el catch lo ponemos por si falla algo que 
no estamos controlando.

3-Si el empleado existe lo 
devolvemos(return empleado)
y si no existe lanzamos la excepción(trow new Error)*/

const getEmpleadoById = async (id)=> {

      try{
        const empleado = empleados.find((e) =>e.id === id); //iterando el array uno por uno y ejecutando esa función por cada uno de los empleados, si se cumple la condición === lo va a devolver
         if(empleado){
            return empleado;           //voy a hacer que ejecute  la funcio e pasada por parametro con el empleado con el empleado que encontre.   
          } 
          throw new Error(`El empleado con id ${id} no existe`);
        } catch (error){
           throw error;
        }
    }
    //FIN PRIMER FUNCIÓN ASÍNCRONA

    //SEGUNDA FUNCIÓN ASÍNCRONA PARA BUSCAR EL SUELDO

    const getSueldoById = async (id)=> {

        try{
          const sueldo = sueldos.find((s) =>s.id === id); //iterando el array uno por uno y ejecutando esa función por cada uno de los empleados, si se cumple la condición === lo va a devolver
           if(sueldo){
              return sueldo;           //voy a hacer que ejecute  la funcio e pasada por parametro con el empleado con el empleado que encontre.   
            } 
            throw new Error(`El sueldo con id ${id} no existe`);
          } catch (error){
            throw error;
          }
      }
    // FIN SEGUNDA FUNCIÓN ASÍNCRONA


    /*TERCERA FUNCION ASÍNCRONA QUE VAYA Y JUNTO LA INFORMACIÓN DEL EMPLEADO Y DEL SUELDO
    PARA QUE LUEGO LO DEVUELVA A QUIEN LO ESTÁ PIDIENDO*/

const id = 2;

const getDatosEmpleado = async (id) =>{
    try{
        const empleado = await getEmpleadoById(id);  //espera a tener la respuesta de la promesa para seguir avanzando con el código
        const sueldo = await getSueldoById(id);
        //return`el Empleado con id ${id} es: ${empleado.nombre} y tiene un sueldo de: ${sueldo.sueldo}`;
        return{
            id,
            nombre: empleado.nombre,
            sueldo: sueldo.sueldo
        }
  
  
    } catch (err) {
       throw(err);
       
    }
} 
//FIN TERCERA FUNCIÓN ASÍNCRONA

//LLAMADA PARA OBTENER TODOS LOS DATOS COMPLPETOS
getDatosEmpleado(id)
.then(data => console.log(`el Empleado con id ${data.id} es: ${data.nombre} y tiene un sueldo de: ${data.sueldo}`))
.catch(err => console.log(err.message));

//FIN