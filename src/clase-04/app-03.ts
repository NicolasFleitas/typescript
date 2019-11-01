export {};
// MIEMBROS PRIVADOS

class Curso {   

    constructor(private id: number, private nombre: string){        
    }
}

class EscuelaDigital {
    // private nombre: string;
    private cursos: Curso[] = [];

    constructor(private nombre: string){        
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
// cursoJS.nombre = 'JavaScript desde Cero';
// cursoJS.id = 20;

console.log('escuela', escuela);
// console.log('escuela.nombre', escuela.nombre); // es private
// cons

