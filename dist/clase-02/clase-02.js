"use strict";
// Tipos primitivos TypeScript
// BOOLEANS
var online = true;
var estaInscripto;
// notacion: post fija: primero se define el 
// nombre de la variable luego el tipo
estaInscripto = false;
estaInscripto = true;
// function tieneDescuento(curso): boolean {
//     if(curso === 'typescript') {
//         return true;
//     }        
//     return false
// }
// console.log(`tieneDescuento('angular'):`, tieneDescuento('angular'));
// NUMBERS
var estudiantes = 100; // inferido tipo number
var cantidadEstudiantes; // tipo explicito
cantidadEstudiantes = 120;
// function getCantidadEstudiantes(curso): number {
//     if (curso === 'typescript') {
//         return 100;
//     }
//     return 0;
// }
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
// Tipos especiales en TypeScript
// * Tipo: Any : puede contener cualquier tipo primitivo
var desconocido; // el tipo any es inferido
desconocido = 'hola';
desconocido = 2;
var desconocido2; // Notación postfija
//Tipo: Void 
var vacio;
function mostrarContenido(curso) {
    var mensaje = curso ? "Bienvenido al curso " + curso : 'Suscribete al curso!';
    console.log('mensaje', mensaje);
}
//console.log('typescript',mostrarContenido('typescript'));
mostrarContenido('typescript');
//Tipo: Never ((Se utiliza mas en una funcion))
//El tipo indica que potencialmente va a retornar un error
var nunca;
function retornaError(error) {
    throw new Error('Error TypeScript.' + error);
    // Nunca retorna un valor!
}
//retornaError('Valor inesperado');
function cicloInfinito() {
    while (true) {
    }
}
// Tipo: Null y Undefinied
var variableUndefined = undefined;
var variableNull = null;
function retornoNull() {
    return null;
}
function retornoUndefined() {
    return undefined;
}
// si por algun motivo nuestra funcion retorna null o undefined
// podemos incluirla en la firma de la funcion
// Por buenas practicas se utiliza undefined
// FUNCIONES EN TYPESCRIPT
// se utiliza ? luego de la variable para indicar 
// que puede ser un parametro opcional en la funcion
// function saludo(nombre?: string): string {
//     if(nombre) {
//         return 'Hola ' + nombre;
//     }
//     return '¡Hola!'
// }
// console.log(saludo(nombreCompleto));
// console.log(saludo());
console.log('ARREGLOS');
// AREGLOS EN TYPESCRIPT
var cursos;
cursos = ['TypeScript', 'Angular'];
// ARREGLOS CON GENERICS
var nombres;
nombres = ['Rebecca Rodriguez', 'Nicolas Fleitas'];
var arreglo = [2, 'cadena', true]; // combinacion de tipos inferidos
// Tuplas
// array de tipos
var infoCursos = ['typescript', 100];
var curso = ['typescript', 150, '31/10/2019'];
console.log('curso', curso);
var nuevosInscritos = 10;
console.log('Fecha de inicio', (curso[2]));
console.log('Total de inscriptos', (curso[1] + nuevosInscritos));
var tuplaTest = ['a', 'b'];
var tuplaTemp = ['c', 'd'];
tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);
