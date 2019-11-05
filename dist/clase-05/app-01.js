"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var curso_1 = require("./modelo/curso");
var escuela_digital_1 = require("./modelo/escuela-digital");
var utiles_1 = require("./utiles");
var utiles_2 = require("./utiles");
var utiles_3 = require("./utiles");
var typescript = new curso_1.Curso(1, 'TypeScript');
utiles_1.analizarClase(curso_1.Curso); // Parametro: Una clase
// Sobreescritura de la funcion
// typescript.lectura = function() {}; // ERROR: @readonly
var escuela = new escuela_digital_1.EscuelaDigital();
utiles_1.analizarClase(escuela_digital_1.EscuelaDigital);
utiles_2.mostrarPropiedades(curso_1.Curso);
console.log('Valor de PI:', utiles_3.PI);
