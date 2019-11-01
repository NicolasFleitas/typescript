// Tipos primitivos TypeScript

// Booleans

let online = true;

let estaInscripto: boolean;
 // notacion: post fija: primero se define el 
 // nombre de la variable luego el tipo

estaInscripto = false; 
estaInscripto = true; 

function tieneDescuento(curso): boolean {
    if(curso === 'typescript') {
        return true;
    }        
    return false
}

console.log(`tieneDescuento('angular'):`, tieneDescuento('angular'));

