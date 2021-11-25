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
;
;
;
;
;
;
/*2-Una vez convertido se debe imprimir en consola nada mas el id del autor ( el que se encuentra en relationsships)
en consola deberia de mostrarse "42"*/
var author = {
    id: 42,
    type: 'people'
};
var relationships = {
    author: author
};
console.log("El id del autor es: ".concat(relationships.author.id));
/*
3-Una vez convertido se debe imprimir en consola nada mas el name de included que tenga el id 42( el que se encuentra en included)
en consola deberia de mostrarse "John"
*/
var person1Attributes = {
    name: 'John',
    age: 80,
    gender: 'male'
};
var person2Attributes = {
    name: 'Joe',
    age: 42,
    gender: 'male'
};
var person1 = {
    id: 42,
    attributes: person1Attributes
};
var person2 = {
    id: 43,
    attributes: person2Attributes
};
var included = [person1, person2];
console.log("El name de la persona del id 42 es ".concat(included[0].attributes.name));
/*4-Una vez convertido se debe imprimir en consola el objeto attributes*/
console.log("El objeto arributes es ".concat(JSON.stringify(included[0].attributes, null, 4)));
