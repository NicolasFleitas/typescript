export {};
//Aserciones DE TIPO EN TYPESCRIPT | Type Assertions
let codigoCurso: any;
codigoCurso = 100;

let numeroCurso: number = <number>codigoCurso;
console.log('numeroCurso',numeroCurso);

// let estudiante: {nombre: string, curso: string} = {};
// estudiante.nombre = 'Nico';
// estudiante.curso = 'JavaScript';

type Estudiante = {nombre: string, curso: string};
let estudiante2 = <Estudiante>{};
estudiante2.nombre = 'Nico';
estudiante2.curso = 'JavaScript';


let estudiante3 = `{"nombre": "Fernando", "curso": "JavaScript"}`;
let objetoEstudiante: Estudiante = <Estudiante>JSON.parse(estudiante3); // casting de una cadena a un object javascript

console.log('estudiante', objetoEstudiante);

