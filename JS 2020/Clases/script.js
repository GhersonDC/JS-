// class Persona{
//     constructor(nombre,apellido,edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//         this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo la edad ${this.edad} años`
//     }
//     saludar(){
//         return `Hola me llamo ${this.nombre} y tengo ${this.edad} años`
//     }
// }
// const juan = new Persona('Juan','Garcia',25);
// const marta = new Persona('Marta','Garcia',35);
// console.log(juan.saludar());
// console.log(marta.saludar());
// console.log(juan.datos);


class Colores{
    constructor(red,green,blue){
        this.red =red
        this.green =green
        this.blue =blue
    }
    valuesBack(){
        return `R = ${this.red} G = ${this.green} B = ${this.blue}`
    }
    valuesRaw(){
        return `${this.red},${this.green},${this.blue}`
    }
}
let redLight = new Colores(221,103,77);
console.log(`%c${redLight.valuesBack()}`,`background: rgb(${redLight.valuesRaw()});`)