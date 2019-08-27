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
//Instanciando uma classe
var ship = new Spacecraft('hyperdrive');
//Executando o método da classe
ship.jumpIntoHyperspace();
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
}(Spacecraft));
//Instanciando a Millennium Falcon
var falcon = new MillenniumFalcon(); //Não foi mais necessário passar algo no construtor (veja os comentarios na classe)
falcon.jumpIntoHyperspace(); //Chamando o método sobrescrito, agora, na Millennium Falcon
//Criação de uma função usando interface como parâmetro (Usando arrow function)
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
//Utilizando a função com template string. falcon é passada e funciona por que implementa Containership (parâmetro da função)
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
