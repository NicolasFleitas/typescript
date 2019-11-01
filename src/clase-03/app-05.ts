// INTERFACES EN TYPESCRIPT

interface ICurso {
    nombre: string;
    id?: number; // opcional
}

let cursoTypeScript: ICurso = {
    nombre: 'TypeScript',
    id: 1
};

cursoTypeScript = {
    nombre: 'Javascript',
    id: 2
};

let curso2: ICurso;

curso2 = {
    nombre: 'Angular'    
};


console.log('cursoTypeScript', cursoTypeScript);

// EXTENDIENDO INTERFACES | HERENCIA DE INTERFACES

interface CursoEDteam extends ICurso {
    costo: number;
}

const primerCurso: CursoEDteam = {
    nombre: 'TypeScript desde Cero',
    id: 200,
    costo: 300000
}

console.log('primerCurso', primerCurso);