// Tipos primitivos TypeScript

// BOOLEANS

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

// NUMBERS

let estudiantes = 100; // inferido tipo number

let cantidadEstudiantes: number; // tipo explicito
cantidadEstudiantes = 120;

function getCantidadEstudiantes(curso): number {
    if (curso === 'typescript') {
        return 100;
    }
    return 0;
}

let inscritosCursoTypescript: number = 100; // declarar en una linea

// Type: Number, hexadecimales
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('decimal', decimal);
console.log('hexadecimal', hexadecimal);

// Type: Number, binario
let binario: number = 0b1010;
console.log('binario',binario)

// Type: Number, octal
let octal: number = 0o755;
console.log('octal',octal);

let nombre = 'Nicolas';
let apellido: string = 'Fleitas';
let nombreCompleto =  nombre + ' ' + apellido;
console.log('nombreCompleto', nombreCompleto);

// String + ES6 Template literals

let nombreCompleto2 = `${nombre} ${apellido}`;
console.log('nombreCompleto2', nombreCompleto2);


let arregloCursos = ['TypeScript', 'Angular'];
let mensaje =  `
Mi nombre completo es ${nombreCompleto} y tengo ${arregloCursos.length} cursos.
Salto de linea
otro salto
`

console.log('mensaje',mensaje)

// Tipos especiales en TypeScript

// * Tipo: Any : puede contener cualquier tipo primitivo
let desconocido; // el tipo any es inferido

desconocido = 'hola';
desconocido = 2;

let desconocido2: any; // Notación postfija

//Tipo: Void 
let vacio: void; 

function mostrarContenido(curso: string): void {
    const mensaje = curso ? `Bienvenido al curso ${curso}` : 'Suscribete al curso!';
    console.log('mensaje', mensaje);
}

//console.log('typescript',mostrarContenido('typescript'));

mostrarContenido('typescript');

//Tipo: Never ((Se utiliza mas en una funcion))
//El tipo indica que potencialmente va a retornar un error
let nunca: never ;

function retornaError(error: string): never {
    throw new Error('Error TypeScript.' + error);
    // Nunca retorna un valor!
}

//retornaError('Valor inesperado');

function cicloInfinito(): never {
    while(true) {

    }
}

// Tipo: Null y Undefinied

let variableUndefined: undefined = undefined;
let variableNull: null = null;

function retornoNull(): null {
    return null;
}

function retornoUndefined(): undefined {
    return undefined;
}

// si por algun motivo nuestra funcion retorna null o undefined
// podemos incluirla en la firma de la funcion
// Por buenas practicas se utiliza undefined


