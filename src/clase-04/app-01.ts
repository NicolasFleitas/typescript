export {};

class EscuelaDigital {
    nombre: string;
    //cursos: string[] = [];

    constructor(nombre: string){
        this.nombre = nombre;
    }

    // agregarCurso(curso: string) {
    //     this.cursos.push(curso);
    // }
}

const escuela = new EscuelaDigital('EDteam1');

// escuela.agregarCurso('Javascript');
// escuela.agregarCurso('TypeScript');

console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
//console.log('escuela.curso', escuela.cursos);


