export {};
// GET Y SET

class Curso {   

    constructor(private _id: number, private _nombre: string){        
    }

    get id() {
        // Permite obtener un valor
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
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
cursoJS.nombre = 'JavaScript desde Cero'; // Asignacion: SET
console.log('nombre cursoJS', cursoJS.nombre); // Leyendo: GET
cursoJS.id = 20; // asignacion SET

console.log('escuela', escuela);
// console.log('escuela.nombre', escuela.nombre); // es private