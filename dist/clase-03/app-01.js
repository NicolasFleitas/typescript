"use strict";
// ALIAS PARA TIPOS DE DATOS EN TS
Object.defineProperty(exports, "__esModule", { value: true });
var curso = 'TypeScript';
// Cursos código: JavaScript = 1 , TypeScript = 2 
//curso = 1; no se puede asignar un number en un string para eso vamos a usar alias ( tipo mixto)
var cursoNuevo; // esta variable sorpota dos tipos de datos
cursoNuevo = 'Javascript';
cursoNuevo = 2; // TypeScript
// se puede aplicar al tipo de retorno de una funcion
function getCurso() {
    //return 'Javascript';
    return 1;
}
// Arreglos
var cursos = ['Javascript', 'TypeScript'];
var cursos2 = ['Javascript', 'TypeScript', '1'];
console.log('cursos', cursos);
console.log('cursos2', cursos2);
