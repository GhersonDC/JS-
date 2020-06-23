//key value object
const computadora = {
    size: 14,
    color: 'black',
    brand: 'dell',
    processor: 'i5Vpro',
    ssd: '240gb',
    memory: ['8gb','4gb','16gb']
}

//computador is key
//computadora is value

// for(const computador in computadora){
//     console.log(`value is: ${computadora[computador]}`); //value of key
//     console.log(`key is: ${computador}`); //key
// }
// console.log(computadora);
// console.log(computadora['brand']);

// //go inside an object with an array
// for(const memory of computadora.memory) //here we can use For of bc we have an array inside it
// {
//     console.log(memory);
// }

//print and join values
console.log(`The computers color is: ${computadora.color} and the memories available for this is: ${computadora.memory.join(', ')}`)