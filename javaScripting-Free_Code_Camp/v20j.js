var gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
];


// var resultado =[{
// iniciales:'jen',
// nacimiento: 2008,
// longitudNombre:5,
// ultimaLetra: 'y',
// }]


var resultado = gente.map(function (persona) {
    return {
        iniciales: persona.nombre[0] + persona.nombre[1] + persona.nombre[2],
        nacimiento: 2018 - persona.edad,
        longitudNombre: persona.nombre.length,
        ultimaLetra: persona.nombre[persona.nombre.length - 1],
    }

});

var mayores = gente.filter(function (persona) {
    // return persona.edad >= 18;
    return persona.edad >= 18;

}).map(function(item){
     return {
         nombre: item.nombre,
         
     }
});

// console.log(resultado);
// console.log(mayores);