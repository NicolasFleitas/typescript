"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
escuela.agregarCurso('Javascript');
escuela.agregarCurso('TypeScript');
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
console.log('escuela.curso', escuela.cursos);
