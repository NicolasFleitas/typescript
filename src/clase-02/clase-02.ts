// Tipos primitivos TypeScript

// BOOLEANS

let online = true;

let estaInscripto: boolean;
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

let estudiantes = 100; // inferido tipo number

let cantidadEstudiantes: number; // tipo explicito
cantidadEstudiantes = 120;

// function getCantidadEstudiantes(curso): number {
//     if (curso === 'typescript') {
//         return 100;
//     }
//     return 0;
// }

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

let cursos: string[]; 
cursos = [ 'TypeScript','Angular'];

// ARREGLOS CON GENERICS

let nombres: Array<string>;
nombres = ['Rebecca Rodriguez','Nicolas Fleitas'];

let arreglo = [2, 'cadena', true]; // combinacion de tipos inferidos

// Tuplas
// array de tipos

let infoCursos: [string,number] = ['typescript',100];

let curso: [string,number,string] = ['typescript',150,'31/10/2019'];
console.log('curso', curso);

let nuevosInscritos = 10;

console.log('Fecha de inicio', (curso[2]));
console.log('Total de inscriptos', (curso[1]+ nuevosInscritos));

let tuplaTest: [string, string] = ['a','b'];
let tuplaTemp: [string, string] = ['c','d'];

tuplaTemp = tuplaTest;
console.log('tuplaTemp',tuplaTemp);



