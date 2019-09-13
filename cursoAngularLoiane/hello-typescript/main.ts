var minhaVar = 'minha variavel';

function minhaFunc(x,y){
    return x + y;
}

//ES6 ou ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1,2,3];
numeros.map(function(valor) {
    return valor * 2;
});

//ES 2015 Arrow function
numeros.map(valor => valor * 2);


//Classes
class Matematica {
    soma(x,y){
        return x + y;
    }
}

//Possivel no JS
var n1 = 'valor qualquer';
//n1 = 4;

//Variável tipada no ES6
var n2: string = 'outro valor';
//Daria erro por causa do tipo
//n1 = 4;