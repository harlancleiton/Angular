import { VeiculoModel } from './VeiculoModel'

export class MotoModel extends VeiculoModel {

    constructor(modelo: string, marca: string) {
        super()
        this.modelo = modelo
        this.marca = marca
    }

    /*public acelerar(): void {
        this.velocidadeAtual += 20
    }*/
}