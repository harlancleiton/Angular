import { VeiculoModel } from './VeiculoModel'

export class Carro extends VeiculoModel {
    //region Variables
    private numeroPortas: number
    //endregion Variables

    constructor(modelo: string, marca: string) {
        super()
        this.modelo = modelo
        this.marca = marca
        
    }
}