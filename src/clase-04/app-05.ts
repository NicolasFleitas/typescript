export {};

// METODOS GET Y SET
// ATRIBUTOS SOLO LECTURA -> readonly
// GET Y SET

class Curso {  

    constructor(private readonly _id: number, private readonly _nombre: string){        
    }
    //no vamos a poder modificar estas variables se coloca despues del modificador de acceso
    
    get id() {
        // Permite obtener un valor
        return this._id;
    }
    // las lineas "set" de abajo , ahora dara error porque no se pueden utilizar la asignacion
    // en variables con atributos de solo lectura 

    // set id(id: number) {
    //     this._id = id;
    // }

    get nombre() {
        return this._nombre;
    }

    // set nombre(nombre: string) {
    //     this._nombre = nombre;
    // }

    /* ******  */
}

class EscuelaDigital {
    //private nombre: string;
    private cursos: Curso[] = [];

    // funcion constructor para crear los objetos de la clase
    constructor(private _nombre: string){        
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
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
// modo lectura
// cursoJS.nombre = 'JavaScript desde Cero'; // Asignacion: SET
console.log('nombre cursoJS', cursoJS.nombre); // Leyendo: GET
//cursoJS.id = 20; // asignacion SET

console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre); // es private