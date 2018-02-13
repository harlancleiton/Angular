import {Carro} from './Carro'

export class Pessoa {
    //region Variables
    private nome: string
    private carroPreferido: string
    private carro: Carro
    //endregion Variables

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    //region Methods
    public getCarroPreferido(): string {
        return this.carroPreferido
    }

    public comprarCarro(modelo: string) {
        console.log(modelo + " comprado com sucesso!")
    }
    //endregion Methods
}