export class Spacecraft {

    /*
        Método reduzido de criar um atributo na classe

        Esta sendo criado um atributo do tipo String chamado propulsor
    */
    constructor (public propulsor: string){}

    //Método da classe
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

}

//Declaração de uma Interface
export interface Containership{

    cargoContainers: number

}

//outra opção de exportar seria:
//export {Spacecraft, Containership}
//e ai retiraria o 'export' antes da classe e interface