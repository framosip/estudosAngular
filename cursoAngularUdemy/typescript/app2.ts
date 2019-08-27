class Spacecraft {

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


//Instanciando uma classe
let ship = new Spacecraft('hyperdrive')

//Executando o método da classe
ship.jumpIntoHyperspace()

//Criação de uma classe extendo outra e implementando uma interface (Ver explicações após esta classe)
class MillenniumFalcon extends Spacecraft implements Containership {

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


//Instanciando a Millennium Falcon
let falcon = new MillenniumFalcon() //Não foi mais necessário passar algo no construtor (veja os comentarios na classe)
falcon.jumpIntoHyperspace() //Chamando o método sobrescrito, agora, na Millennium Falcon


//Declaração de uma Interface
interface Containership{

    cargoContainers: number

}


//Criação de uma função usando interface como parâmetro (Usando arrow function)
let goodForTheJob = ( ship: Containership) => ship.cargoContainers > 2

//Utilizando a função com template string. falcon é passada e funciona por que implementa Containership (parâmetro da função)
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes': 'no'}`)