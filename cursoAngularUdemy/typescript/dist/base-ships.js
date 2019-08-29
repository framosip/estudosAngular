"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    /*
        Método reduzido de criar um atributo na classe

        Esta sendo criado um atributo do tipo String chamado propulsor
    */
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    //Método da classe
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
//outra opção de exportar seria:
//export {Spacecraft, Containership}
//e ai retiraria o 'export' antes da classe e interface
