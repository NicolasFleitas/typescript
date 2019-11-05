import {Entidad} from '../decoradores';
import {readonly} from '../decoradores';
import {enumerable} from '../decoradores';

@Entidad({
    clave: 'CURSO'
})
export class Curso {
    prueba: string;

    constructor(private _id: number, private _nombre: string) {
        this.prueba = '';
    }
    // solamente de modo lectura, evitar sobre escribir los metodos
    @readonly
    lectura(){}

    // @decorador --> como usar con una funcion
    @enumerable(false) // no aparece como propiedad
    getPrueba() {
        return this.prueba;
    }
           
    get id() {
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