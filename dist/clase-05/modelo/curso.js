"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decoradores_1 = require("../decoradores");
var decoradores_2 = require("../decoradores");
var decoradores_3 = require("../decoradores");
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
        decoradores_2.readonly
    ], Curso.prototype, "lectura", null);
    __decorate([
        decoradores_3.enumerable(false) // no aparece como propiedad
    ], Curso.prototype, "getPrueba", null);
    Curso = __decorate([
        decoradores_1.Entidad({
            clave: 'CURSO'
        })
    ], Curso);
    return Curso;
}());
exports.Curso = Curso;
