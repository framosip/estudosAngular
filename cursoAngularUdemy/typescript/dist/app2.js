"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
//Instanciando uma classe
var ship = new base_ships_1.Spacecraft('hyperdrive');
//Executando o método da classe
ship.jumpIntoHyperspace();
//Instanciando a Millennium Falcon
var falcon = new starfighters_1.MillenniumFalcon(); //Não foi mais necessário passar algo no construtor (veja os comentarios na classe)
falcon.jumpIntoHyperspace(); //Chamando o método sobrescrito, agora, na Millennium Falcon
//Criação de uma função usando interface como parâmetro (Usando arrow function)
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
//Utilizando a função com template string. falcon é passada e funciona por que implementa Containership (parâmetro da função)
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
