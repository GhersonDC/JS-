// function saludar(){
//     console.log('Hola');
// }

// const saludar = () => console.log('hola'); //NUEVA FORMA DE CREAR FUNCIONES DE FLECHA
// const saludarUsuario = (user) => console.log(`Hola Mr. ${user}`)
// saludar(); //invoque the function with ()
// saludarUsuario('Martin'); //invoque the function with ()

//hacer una suma con dos parametros
// const suma = (num1 , num2) =>{
//     if(num1==2)
//     {return num1+num2;}
//     console.log('esto no se va a ejecutar si entra en el if');
//     return num1;
// }
// console.log(suma(7,3));

const suma = (num1 , num2) => num1 + num2

let result = suma(3,6)

console.log(result);