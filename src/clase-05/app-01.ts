export{};

import { Curso } from './modelo/curso';
import { EscuelaDigital } from './modelo/escuela-digital';
import { analizarClase } from './utiles';
import { mostrarPropiedades } from './utiles';
import { PI } from './utiles';

let typescript = new Curso(1, 'TypeScript');
analizarClase(Curso);// Parametro: Una clase
// Sobreescritura de la funcion
// typescript.lectura = function() {}; // ERROR: @readonly
let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostrarPropiedades(Curso);
console.log('Valor de PI:', PI);