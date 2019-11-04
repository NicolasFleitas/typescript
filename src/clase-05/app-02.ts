// usaremos una libreria externa JAVASCRIPT: lodash
// package.json
// npm init -y 
// npm install lodash --save

import {random} from '../../node_modules/@types/lodash';

function numeroAleatorio(a: number, b: number) {
    return random(a, b);
}

console.log('numeroAleatorio(1,10)',numeroAleatorio(1,10));
