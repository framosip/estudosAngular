"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Importa as classes exportadas no outro modulo
var base_ships_1 = require("./base-ships");
//Criação de uma classe extendo outra e implementando uma interface (Ver explicações após esta classe)
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    /*
        Como uma Millennium Falcom é uma Spacecraft logo é necessário um construtor
        por que Spacecraft exige. Neste exemplo nada esta sendo recebido mas o construtor
        que Spacecraft espera esta sendo passado de forma explicita
    */
    function MillenniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 2; //Atribuição no construtor do atributo da classe
        return _this;
    }
    //Sobrescrevendo o método de Spacecraft
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            //Chama o método de super , ou seja, de spacecraft
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MillenniumFalcon;
}(base_ships_1.Spacecraft));
exports.MillenniumFalcon = MillenniumFalcon;
