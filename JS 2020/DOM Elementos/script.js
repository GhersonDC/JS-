//getElementById--------------------

// const texto1 = document.getElementById('texto1'); //accedemos al elemento con getElementById

// console.log(texto1.textContent)

//querySelector ---------------------

//accede al primer elemento al que le indicamos

// let texto1 = document.querySelector('h3');
// texto1.style.color = 'cyan';

//querySelectorAll ---------------------

//accede a los elementos en todo el html y duevuelve un nodeList
//por lo que tiene que usarse array.from para verlo y trabajar con el 
//como un array

const texto = Array.from(document.querySelectorAll('#h3')); //tener cuidado a lo que se accede, si es clase se pone un . si es un id es # antes del nombre del elemento para disntiguirlos

console.log(texto)
texto.map(p=>
    p.style.color='red'
)
