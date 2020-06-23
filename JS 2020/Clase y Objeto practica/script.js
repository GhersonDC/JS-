class Libro{
    constructor(titulo,autor,year,genero){
        this.titulo = titulo
        this.autor = autor
        this.year = year
        this.genero = genero
    }
    getAuthors(){
        return this.autor
    }
    informacion(){
        return `titulo: ${this.titulo} autor: ${this.autor} genero: ${this.genero} year: ${this.year}`
    }
}

const libros = []

while(libros.length < 3){
    let titulo = prompt('titulo: ')
    let autor = prompt('autor: ')
    let year = prompt('año: ')
    let genero = prompt('genero: ').toLowerCase()

    if(titulo != '' && autor != '' && year.length == 4 && !isNaN(year) &&
    (genero == 'terror' || genero == 'aventura' )){
        libros.push(new Libro(titulo,autor,year,genero))
    }
}

const showBooks = () => {
    console.log(libros)
    
}
const showAuthors = () => {
    let authors = []
    for(const book of libros){
        // console.log(book.autor) //opcion 1 de acceder al autor con array for of
        // console.log(book.getAuthors())//acceder por medio de un metodo en el array
        authors.push(book.getAuthors()) //llama a la funcion de author y los mete al array de autores
        
    }
    console.log(authors.sort()) // lo arregla y lo imprime por orden
}

const gender = []
const showGeneroUno = () =>{
    let generoSeleccion = prompt('Que genero deseas buscar: ').toLowerCase()
    for(const generouno of libros){
        if(generouno.genero == generoSeleccion)
            gender.push(generouno.informacion())
    }
    console.log(gender)
}

showAuthors();
showGeneroUno();
