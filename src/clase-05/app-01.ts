
export{};
// DECORADORES

// RECIBE COMO PARA PARAMETRO LA ENTIDAD QUE QUIERA DECORAR
function Entidad(config: any) {
    console.log('Entidad', config);
    return function(target: any) {
        // Dinamicamente: asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log('target', target);
    }
}



function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

function readonly(target: any, name: any, descriptor: PropertyDescriptor) {
    descriptor.writable = false;
    return descriptor;
}

@Entidad({
    clave: 'CURSO'
})
class Curso {
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

@Entidad({
    clave: 'ESCUELADIGITAL'
})

class EscuelaDigital {

}

function analizarClase(clase: any) {
    console.log('Clave:', clase.clave);
}

function mostrarPropiedades(clase: any) {
    for(let prop in clase.prototype) {
        console.log('prop', prop);
    }
}

const PI = 3.14;

let typescript = new Curso(1, 'TypeScript');
analizarClase(Curso);// Parametro: Una clase
// Sobreescritura de la funcion
// typescript.lectura = function() {}; // ERROR: @readonly
let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostrarPropiedades(Curso);
console.log('Valor de PI:', PI);