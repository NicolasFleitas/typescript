"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Aserciones DE TIPO EN TYPESCRIPT | Type Assertions
var codigoCurso;
codigoCurso = 100;
var numeroCurso = codigoCurso;
console.log('numeroCurso', numeroCurso);
var estudiante2 = {};
estudiante2.nombre = 'Nico';
estudiante2.curso = 'JavaScript';
var estudiante3 = "{\"nombre\": \"Fernando\", \"curso\": \"JavaScript\"}";
var objetoEstudiante = JSON.parse(estudiante3); // casting de una cadena a un object javascript
console.log('estudiante', objetoEstudiante);
