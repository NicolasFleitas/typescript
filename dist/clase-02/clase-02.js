"use strict";
// Tipos primitivos TypeScript
// Booleans
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
