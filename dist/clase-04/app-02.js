"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MIEMBROS PUBLICOS
// EN cualquier ambito donde se encuentre el objeto curso
// Se podra cambiar su estado
var Curso = /** @class */ (function () {
    function Curso(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital(nombre) {
        this.cursos = [];
        this.nombre = nombre;
    }
    EscuelaDigital.prototype.agregarCurso = function (curso) {
        this.cursos.push(curso);
    };
    return EscuelaDigital;
}());
var escuela = new EscuelaDigital('EDteam1');
var cursoJS = new Curso(1, 'JavaScript');
var cursoTS = new Curso(2, 'TypeScript');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atributos publicos
cursoJS.nombre = 'JavaScript desde Cero';
cursoJS.id = 20;
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
console.log('escuela.curso', escuela.cursos);
