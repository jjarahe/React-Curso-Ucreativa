/*Tarea*/
/*{
"data": [{
            "type": "articles",
            "id": "1",
            "attributes": {
                            "title": "JSON:API paints my bikeshed!",
                            "body": "The shortest article. Ever.",
                            "created": "2015-05-22T14:56:29.000Z",
                            "updated": "2015-05-22T14:56:28.000Z"
                            },
            "relationships": {
                            "author": {
                                         "data": {"id": "42", "type": "people"}
                                        }
                            }
        }],
"included": [
                {
                "type": "people",
                "id": "42",
                "attributes": {
                                "name": "John",
                                "age": 80,
                                "gender": "male"
                                }
                },
                {
                "type": "people",
                "id": "43",
                "attributes": {
                                "name": "Joe",
                                "age": 42,
                                "gender": "male"
                               }
                }
]
}*/
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
};

interface Relationships {
    author: Autor
};

interface Articles {
    id: Number;
    attributes: ArticleAttributes;
    relationships: Relationships;  
};

interface PeopleAttributes {
    name: String;
    age: Number;
    gender: String;
};

interface People {
    id: Number;
    attributes: PeopleAttributes; 
};
/*2-Una vez convertido se debe imprimir en consola nada mas el id del autor ( el que se encuentra en relationsships)
en consola deberia de mostrarse "42"*/
const author: Autor = {
    id: 42,
    type: 'people'
};

const relationships: Relationships = {
    author: author
};

console.log(`El id del autor es: ${relationships.author.id}`);
/*
3-Una vez convertido se debe imprimir en consola nada mas el name de included que tenga el id 42( el que se encuentra en included)
en consola deberia de mostrarse "John"
*/ 

const person1Attributes: PeopleAttributes = {
    name: 'John',
    age:80,
    gender: 'male'
};
const person2Attributes: PeopleAttributes = {
    name: 'Joe',
    age:42,
    gender: 'male'
};

const person1: People = {
    id: 42,
    attributes: person1Attributes
};

const person2: People = {
    id: 43,
    attributes: person2Attributes
};

const included: Array<People> = [person1,person2];

console.log(`El name de la persona del id 42 es ${included[0].attributes.name}`);


/*4-Una vez convertido se debe imprimir en consola el objeto attributes*/ 
console.log(`El objeto arributes es ${JSON.stringify(included[0].attributes,null,4)}`);