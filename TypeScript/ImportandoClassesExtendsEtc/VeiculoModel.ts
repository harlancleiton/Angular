export class VeiculoModel {
    //region Variables
    protected modelo: string
    protected marca: string
    protected anoFabricacao: number
    protected velocidadeMaxima: number
    protected velocidadeAtual: number
    protected placa: string
    //endregion Variables

    constructor () {
        this.velocidadeAtual = 0
    }

    //region Methods
    public acelerar(): void {
        this.velocidadeAtual += 10
    }

    public parar(): void {
        this.velocidadeAtual = 0
    }

    public getVelocidadeAtual(): number {
        return this.velocidadeAtual
    }
    //endregion Methods
}