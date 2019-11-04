"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// DECORADORES
// RECIBE COMO PARA PARAMETRO LA ENTIDAD QUE QUIERA DECORAR
function Entidad(config) {
    console.log('Entidad', config);
    return function (target) {
        // Dinamicamente: asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log('target', target);
    };
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
var Curso = /** @class */ (function () {
    function Curso(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.prueba = '';
    }
    // solamente de modo lectura, evitar sobre escribir los metodos
    Curso.prototype.lectura = function () { };
    // @decorador --> como usar con una funcion
    Curso.prototype.getPrueba = function () {
        return this.prueba;
    };
    Object.defineProperty(Curso.prototype, "id", {
        get: function () {
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
    __decorate([
        readonly
    ], Curso.prototype, "lectura", null);
    __decorate([
        enumerable(false) // no aparece como propiedad
    ], Curso.prototype, "getPrueba", null);
    Curso = __decorate([
        Entidad({
            clave: 'CURSO'
        })
    ], Curso);
    return Curso;
}());
var EscuelaDigital = /** @class */ (function () {
    function EscuelaDigital() {
    }
    EscuelaDigital = __decorate([
        Entidad({
            clave: 'ESCUELADIGITAL'
        })
    ], EscuelaDigital);
    return EscuelaDigital;
}());
function analizarClase(clase) {
    console.log('Clave:', clase.clave);
}
function mostrarPropiedades(clase) {
    for (var prop in clase.prototype) {
        console.log('prop', prop);
    }
}
var PI = 3.14;
var typescript = new Curso(1, 'TypeScript');
analizarClase(Curso); // Parametro: Una clase
// Sobreescritura de la funcion
// typescript.lectura = function() {}; // ERROR: @readonly
var escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostrarPropiedades(Curso);
console.log('Valor de PI:', PI);
