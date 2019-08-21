//Variáveis

let message: string = "Help me, Obi-Wan Kenobi. You're my only hope"
console.log(message)

let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next epidose is " + episode)

let favoriteDroid //Por padrão quando um tipo de variável não é informada, ela é do tipo 'Any'
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)


//Funções

//Exemplo de tipo de função tipada no parâmetro e retorno (neste exemplo boolean)
let isEnoughToBeatMF = function(parsecs: number) : boolean {
    return parsecs < 12
}

//Testando a função
let distance = 11

//Usando template String para incluir expressões na String
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

//Declarando uma arrow function
//Do lado esquerdo (após call =), esta a declaração da função sem a palavra function e do lado direito de => está o corpo da função
//Assim como no primeiro exemplo, a função não tem nome então é chamada usando o nome da variável que recebeu a função anonima.
let call = (name: string) => console.log(`Do you copy, ${name}`)

//Testando a função
call('R2')

//Parâmetros padrões em funções TypeScript 
//O parâmetro inc tem o valor padrão 1
function inc(speed: number, inc: number = 1): number {
    return speed + inc
}

//Testando a função
//Primeiro passando os dois parâmetros
console.log(`inc (5,1) = ${inc(5,1)}`)

//Segundo passando apenas o primeiro parâmetro ja que o segundo tem um valor padrão
console.log(`inc (5) = ${inc(5)}`)

