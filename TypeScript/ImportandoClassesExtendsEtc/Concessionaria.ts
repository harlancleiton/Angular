import { Carro } from './Carro'
import { IConcessionaria } from './IConcessionaria'

export class Concessionaria implements IConcessionaria {

    //region Variables
    private endereco: string
    private listaCarros: Array<Carro> //Se definido any: Qualquer tipo de dados
    //endregion Variables

    constructor(endereco: string, listaCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaCarros = listaCarros
    }

    //region Methods
    public fornecerHorarioFuncionamento(): string {
        return "Seg - Sex : 8:00 - 18:00h"
    }

    public getEndereco(): string {
        return this.endereco
    }

    public getListaCarros(): Array<Carro> {
        return this.listaCarros
    }
    //endregion Methods
}