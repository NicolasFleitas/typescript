"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// METODOS GET Y SET
// ATRIBUTOS SOLO LECTURA -> readonly
// GET Y SET
var Curso = /** @class */ (function () {
    //no vamos a poder modificar estas variables se coloca despues del modificador de acceso
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
            // Permite obtener un valor
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Curso.prototype, "nombre", {
        // las lineas "set" de abajo , ahora dara error porque no se pueden utilizar la asignacion
        // en variables con atributos de solo lectura 
        // set id(id: number) {
        //     this._id = id;
        // }
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    // funcion constructor para crear los objetos de la clase
    function EscuelaDigital(_nombre) {
        this._nombre = _nombre;
        //private nombre: string;
        this.cursos = [];
    }
    Object.defineProperty(EscuelaDigital.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
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
// modo lectura
// cursoJS.nombre = 'JavaScript desde Cero'; // Asignacion: SET
console.log('nombre cursoJS', cursoJS.nombre); // Leyendo: GET
//cursoJS.id = 20; // asignacion SET
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre); // es private
