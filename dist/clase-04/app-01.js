"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EscuelaDigital = /** @class */ (function () {
    //cursos: string[] = [];
    function EscuelaDigital(nombre) {
        this.nombre = nombre;
    }
    return EscuelaDigital;
}());
var escuela = new EscuelaDigital('EDteam1');
// escuela.agregarCurso('Javascript');
// escuela.agregarCurso('TypeScript');
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
//console.log('escuela.curso', escuela.cursos);
