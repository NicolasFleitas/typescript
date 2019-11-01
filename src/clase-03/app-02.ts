// ASERCIONES DE TIPOS
// ALIAS PARA TIPOS DE DATOS II

export {}; // Modulo en TS

let curso: string = 'TypeScript';

// Cursos código: JavaScript = 1 , TypeScript = 2 
//curso = 1; no se puede asignar un number en un string para eso vamos a usar alias ( tipo mixto)

type Curso = string | number; // alias Curso

let cursoNuevo: Curso // esta variable sorpota dos tipos de datos

cursoNuevo = 'Javascript';
cursoNuevo = 2; // TypeScript

// se puede aplicar al tipo de retorno de una funcion

function getCurso(): Curso {
    //return 'Javascript';
    return 1;
}
// Arreglos
let cursos: string[] = ['Javascript', 'TypeScript'];
let cursos2: Curso[] = ['Javascript', 'TypeScript','1'];

console.log('cursos', cursos);
console.log('cursos2', cursos2);




