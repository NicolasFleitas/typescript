export {};
// MIEMBROS PUBLICOS

// EN cualquier ambito donde se encuentre el objeto curso
// Se podra cambiar su estado
class Curso {
    id: number; // public
    public nombre: string; // public

    constructor(id: number, nombre: string){
        this.id = id;
        this.nombre = nombre;
    }
}

class EscuelaDigital {
    nombre: string;
    cursos: Curso[] = [];

    constructor(nombre: string){
        this.nombre = nombre;
    }

    agregarCurso(curso: Curso) {
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('EDteam1');
let cursoJS = new Curso(1,'JavaScript');
let cursoTS = new Curso(2, 'TypeScript');


escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);

// Acceder a los atributos publicos
cursoJS.nombre = 'JavaScript desde Cero';
cursoJS.id = 20;
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre);
console.log('escuela.curso', escuela.cursos);


