"use strict";
// Tipos primitivos TypeScript
// BOOLEANS
var online = true;
var estaInscripto;
// notacion: post fija: primero se define el 
// nombre de la variable luego el tipo
estaInscripto = false;
estaInscripto = true;
function tieneDescuento(curso) {
    if (curso === 'typescript') {
        return true;
    }
    return false;
}
console.log("tieneDescuento('angular'):", tieneDescuento('angular'));
// NUMBERS
var estudiantes = 100; // inferido tipo number
var cantidadEstudiantes; // tipo explicito
cantidadEstudiantes = 120;
function getCantidadEstudiantes(curso) {
    if (curso === 'typescript') {
        return 100;
    }
    return 0;
}
var inscritosCursoTypescript = 100; // declarar en una linea
// Type: Number, hexadecimales
var decimal = 10;
var hexadecimal = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);
// Type: Number, binario
var binario = 10;
console.log('binario', binario);
// Type: Number, octal
var octal = 493;
console.log('octal', octal);
var nombre = 'Nicolas';
var apellido = 'Fleitas';
var nombreCompleto = nombre + ' ' + apellido;
console.log('nombreCompleto', nombreCompleto);
// String + ES6 Template literals
var nombreCompleto2 = nombre + " " + apellido;
console.log('nombreCompleto2', nombreCompleto2);
var arregloCursos = ['TypeScript', 'Angular'];
var mensaje = "\nMi nombre completo es " + nombreCompleto + " y tengo " + arregloCursos.length + " cursos.\nSalto de linea\notro salto\n";
console.log('mensaje', mensaje);
"\n";
