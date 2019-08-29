//Importa as classes exportadas no outro modulo
import {Spacecraft, Containership} from './base-ships'

//Criação de uma classe extendo outra e implementando uma interface (Ver explicações após esta classe)
export class MillenniumFalcon extends Spacecraft implements Containership {

    //Atributo obrigatório devido a implementação da interface Containership
    cargoContainers: number

    /*
        Como uma Millennium Falcom é uma Spacecraft logo é necessário um construtor
        por que Spacecraft exige. Neste exemplo nada esta sendo recebido mas o construtor
        que Spacecraft espera esta sendo passado de forma explicita
    */
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 2 //Atribuição no construtor do atributo da classe
    }

    //Sobrescrevendo o método de Spacecraft
    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            //Chama o método de super , ou seja, de spacecraft
            super.jumpIntoHyperspace()
        }else{
            console.log('Failed to jump into hyperspace')
        }
    }

}