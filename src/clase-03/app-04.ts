export{};
// ENUMERADOS EN TYPESCRIPT

// Permiten definir definir un set reducido de tipos de datos

//type Curso: string | number;

enum Curso {
    Javascript,
    TypeScript,
    Angular
}

let curso: Curso = Curso.Javascript;

console.log('curso',curso);
console.log('curso', Curso[curso]);

enum Dia {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes // i = 4;
}

console.log('Viernes',Dia.Viernes);

enum FinSemana {
    Sabado = 5,
    Domingo
} 

console.log('Sabado',FinSemana.Sabado);
console.log('Domingo',FinSemana.Domingo);


// CONTROL  SOBRE LOS VALORES PARA ENUMERADO

enum Mes {
    Enero = 'Ene',
    Febrero = 'Feb',
    Marzo = 'Mar',
    Abril = 'Abr'
}

console.log('Marzo', Mes.Marzo);