export {};

// HERENCIA DE CLASES

// MODiFICADORES DE ACCESO: PROTECTED
class Curso {      
    constructor(private readonly _id: number, private readonly _nombre: string) {        
    }   
    
    get id() {        
        return this._id;
    }
    

    get nombre() {
        return this._nombre;
    }
}

// superclase escuela
class Escuela {
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
const miEscuela = new Escuela(1,'ED-team', 'ed.team');
const escuela = new EscuelaDigital(1,'EDteam1','ed.team');
let cursoJS = new Curso(1,'JavaScript');
let cursoTS = new Curso(2, 'TypeScript');
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS); 


console.log('nombre cursoJS', cursoJS.nombre); // Leyendo: GET
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre); 
console.log('escuela.paginaWeb', escuela.paginaWeb);