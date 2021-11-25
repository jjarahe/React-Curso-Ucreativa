const booleano: boolean = false;
const texto: String = 'Hola Mundo';
const numero: Number = 0;
const cualquiera: any = 'cualquiera';


console.log(booleano)
console.log(texto)
console.log(numero)
console.log(cualquiera)

/*Se pueden crear tipos de variable */ 
type cedula = string;
let nuevaVariable: cedula = '402180615';

interface Persona {
    nombre: String;
    edad: Number;
    birthdate: Date;
};

const variablePersona: Persona = {
    nombre: 'Hernan',
    edad: 29,
    birthdate: new Date()
};

/*Trabajo en Clase 

Crear una interfaz de usuario que contenga nombre, apellido, direccion (pais, canton, distrito), 
preferencias (titulo, calificacion(numero de 1-5))
*/

interface Direccion {
    pais: String;
    canton: String;
    distrito: String;
};

interface Preferencia {
    titulo: String;
    calificacion: Number;
};

interface Usuario {
    nombre: String;
    apellido: String;
    direccion: Direccion;
    preferencias: Array<Preferencia>;
};

const direccion: Direccion = {
    pais: 'Costa Rica',
    canton: 'Flores',    
    distrito: 'Llorente'
};

const preferencia1: Preferencia = {
    titulo: 'Triatlon',
    calificacion: 1
}

const preferencia2: Preferencia = {
    titulo: 'Programar',
    calificacion: 2
}

const usuario: Usuario = {
    nombre: 'Juan',
    apellido: 'Jara',
    direccion: direccion,
    preferencias: [preferencia1,preferencia2]
}





/*Tarea*/

interface ArticleAttributes {
    title: String;
    body: String;
    created: Date;
    updated: Date;
};

interface Autor {
    id: Number;
    type: String;
}

interface Relationships {
    author: Autor
}

interface Articles {
    id: Number;
    attributes: ArticleAttributes;
    relationships: relationships;  
}

interface PeopleAttributes {
    name: String;
    age: Number;
    gender: String;
}

interface People {
    id: Number;
    attributes: PeopleAttributes; 
}
/*2-Una vez convertido se debe imprimir en consola nada mas el id del autor ( el que se encuentra en relationsships)
en consola deberia de mostrarse "42"*/
const author: Autor = {
    id: 42,
    type: 'people'
}

const relationships: Relationships = {
    author: author
}

console.log(`El id del autor es: ${relationships.author.id}`)
/*
3-Una vez convertido se debe imprimir en consola nada mas el name de included que tenga el id 42( el que se encuentra en included)
en consola deberia de mostrarse "John"
*/ 

const person1Attributes: PeopleAttributes = {
    name: 'John',
    age:80,
    gender: 'male'
}
const person2Attributes: PeopleAttributes = {
    name: 'Joe',
    age:42,
    gender: 'male'
}

const person1: People = {
    id: 42,
    attributes: person1Attributes
}

const person2: People = {
    id: 43,
    attributes: person2Attributes
}

const included: Array<People> = [person1,person2]

console.log(`El name de la persona del id 42 es ${included[0].attributes.name}`)


/*4-Una vez convertido se debe imprimir en consola el objeto attributes*/ 
console.log(`El objeto arributes es ${included[0].attributes}`)
