
/*funcion de js que va a ejecutar una funcion callback despuès 
de un determinado tiempo.
UN CALLBACK ES UNA FUNCIÒN QUE SE PASA COMO PARÀMETRO PARA QUE LO
EJECUTE LA OTRA FUNCIÒN
*/


/* setTimeout(()=>{
   console.log("Hi");
},2000); */
   
  /* const saludar =()=>{
     console.log("Hi")
 }
 
 setTimeout(saludar,2000); 
                          */
 
/* EJEMPLO: SERVICIO QUE DEVUELVE UN USUARIO NOS PASAN:
     UN ID Y NOSOTROS LE DEVOLVEMOS EL OBEJTO DE UN USUARIO */
     /* EN ESTE CASO LAS CALLBACK SE USA PARA IMPRIMIR LA FUNCION DE MANERA 
     ASINCRONA CORRECTAMENTE, PORQUE DE LO CONTRARIO ESTARÍA UNDEFINED */
     
 const getUsuarioById = (id, callback) =>{

      const user = {
           id,
           nombre: 'Guido'

      }


     setTimeout(()=> {

         callback(user);
 
     }, 1000);

    
 }   

 //llamar a la funcion
 /*const imprimirUsuario =(usuario) =>{
     console.log(usuario.nombre);
 }
 getUsuarioById(20, imprimirUsuario); */

 getUsuarioById(20,({nombre,id}) =>{
     console.log(`Nombre: ${nombre.toUpperCase()} - Id: ${id}`);
   
 });