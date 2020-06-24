const preguntas = ['Amazon','ML','Shein','Amazon']

console.log(preguntas.some(pregunta => (pregunta.length >3))) //busca si hay un elemento con longitud 3
console.log(preguntas.every(pregunta => (pregunta.length >3))) //busca si todos los elementos tienen longitud 3

console.log(preguntas.some(pregunta => (pregunta == 'Amazon'))) //busca si hay un elemento con longitud la palabra amazon