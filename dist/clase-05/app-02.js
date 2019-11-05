"use strict";
// usaremos una libreria externa JAVASCRIPT: lodash
// package.json
// npm init -y 
// npm install lodash --save
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
function numeroAleatorio(a, b) {
    return lodash_1.random(a, b);
}
console.log('numeroAleatorio(1,10)', numeroAleatorio(1, 10));
console.log('random(1,100)', lodash_1.random(1, 100));
