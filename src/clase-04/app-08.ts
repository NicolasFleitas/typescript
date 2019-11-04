export {};

// HERENCIA DE CLASES
// MODiFICADORES DE ACCESO: PROTECTED
// CLASES ABSTRACTAS 
// ATRIBUTOS Y METODOS ESTATICOS

enum MisCursos {
    JavaScript = 0,
    TypeScript = 1,
    Angular = 2
}

class Curso {     
    public static cursosDisponibles: MisCursos[] = [MisCursos.JavaScript, MisCursos.TypeScript];

    constructor(private readonly _id: number, private readonly _nombre: string) {        
    }   
    
    get id() {        
        return this._id;
    }
    

    get nombre() {
        return this._nombre;
    }

    static getInfo(c: Curso) {
        return JSON.stringify(c)
    }
}

// superclase escuela
abstract class Escuela { 
    // al usar abstract el compilador ya no permite crear instancias de esta clase
    protected cursos: Curso[] = [];

    constructor(
        protected _id: number,
        protected _nombre: string
    ){

    }

    get id(){
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

    agregarCurso(curso: Curso) {
        this.cursos.push(curso);
    }
    // una funcion podria ser abstract




}

class EscuelaDigital extends Escuela {    

    constructor(id: number,nombre: string,private _paginaWeb: string){        
        super(id,nombre); // para reutilizar el constructor de la super clase
    }

    get paginaWeb() {
        return this._paginaWeb;
    }

    set paginaWeb(paginaWeb: string){
        this._paginaWeb = paginaWeb;
    }

}
// const miEscuela = new EscuelaDigital(1,'ED-team','ed.team'); // Clase abstracta
const escuela = new EscuelaDigital(1,'EDteam1','ed.team');
let cursoJS = new Curso(1,'JavaScript');
let cursoTS = new Curso(2, 'TypeScript');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS); 


console.log('nombre cursoJS', cursoJS.nombre); // Leyendo: GET
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre); 
console.log('escuela.paginaWeb', escuela.paginaWeb);

//
console.log('MisCursos', Curso.cursosDisponibles);
console.log('CursoJS', Curso.getInfo(cursoJS));