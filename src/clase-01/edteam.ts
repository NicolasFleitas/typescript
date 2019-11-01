let cursosx = ['TypeScript desde cero','Angular avanzado'];

console.log('cursos ', cursos);

const inscriptos = 20;

function suma(a: number, b: number) {
    return a + b;
}

const resultado = suma(5,10);
console.log('5 + 10', resultado);

//Template literals - ES6
let codigo = `
    <button>Hola</button>    
    <div><p>codigo html con template literals</p></div>
`; 
console.log('Codigo', codigo);

let cursox = 'TypeScript';
let saludo2 = `Bienvenidos al curso de ${cursox}`;
console.log('saludo', saludo2);
