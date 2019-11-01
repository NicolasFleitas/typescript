"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// GET Y SET
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            // Permite obtener un valor
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital(nombre) {
        this.nombre = nombre;
        // private nombre: string;
        this.cursos = [];
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
cursoJS.nombre = 'JavaScript desde Cero'; // Asignacion: SET
console.log('nombre cursoJS', cursoJS.nombre); // Leyendo: GET
cursoJS.id = 20;
console.log('escuela', escuela);
// console.log('escuela.nombre', escuela.nombre); // es private
