import {Spacecraft, Containership} from './base-ships'
import {MillenniumFalcon} from './starfighters'

//Instanciando uma classe
let ship = new Spacecraft('hyperdrive')

//Executando o método da classe
ship.jumpIntoHyperspace()

//Instanciando a Millennium Falcon
let falcon = new MillenniumFalcon() //Não foi mais necessário passar algo no construtor (veja os comentarios na classe)
falcon.jumpIntoHyperspace() //Chamando o método sobrescrito, agora, na Millennium Falcon


//Criação de uma função usando interface como parâmetro (Usando arrow function)
let goodForTheJob = ( ship: Containership) => ship.cargoContainers > 2

//Utilizando a função com template string. falcon é passada e funciona por que implementa Containership (parâmetro da função)
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`)