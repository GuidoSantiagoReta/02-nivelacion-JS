


const person = {
    name: 'Maria',
    lastname: 'Ramirez',
    profession: 'developer',

    getDescription(){
        return `${name} ${lastname} es ${profession}`
    }

}

 /* const name = person.name;
  const lastname = person.lastname;
  const profession = person.profession;
*/


  //const {name, lastname, profession, edad=40} = person;

//destructuring
 /*const imprimirPerson = ({name, lastname, profession, edad=40}) =>{
    console.log(name, lastname, profession, edad); 
 }
 imprimirPerson(person);*/

 const persons=['Maria','Lucas','Martin'];

/*const p1 = persons[0];
const p2 = persons[1];
const p3 = persons[2]; */


const[p1, p2, p3]= persons;
 //destructuring with arrays
 console.log(p1, p2, p3);




  
  
 