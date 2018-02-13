class Carro {
    //region Variables
    private modelo: string
    private marca: string
    private anoFabricacao: number
    private numeroPortas: number
    private velocidadeMaxima: number
    private velocidadeAtual: number
    private placa: string
    //endregion Variables

    constructor(modelo: string, marca: string) {
        this.modelo = modelo
        this.marca = marca
    }

    //region Methods
    public acelerar(): void {
        this.velocidadeMaxima += 10
    }

    public parar(): void {
        this.velocidadeAtual = 0
    }

    public getVelocidadeAtual(): number {
        return this.velocidadeAtual
    }
    //endregion Methods
}

class Concessionaria {

    //region Variables
    private endereco: string
    private listaCarros: Array<Carro> //Se definido any: Qualquer tipo de dados
    //endregion Variables

    constructor(endereco: string, listaCarros: Array<Carro>) {
        this.endereco = endereco
        this.listaCarros = listaCarros
    }

    //region Methods
    public getEndereco(): string {
        return this.endereco
    }

    public getListaCarros(): Array<Carro> {
        return this.listaCarros
    }
    //endregion Methods
}

class Pessoa {
    //region Variables
    private nome: string
    private carroPreferido: string
    private carro: any
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

/*
let carro: Carro = new Carro("Fiesta", "Ford")
carro.parar()
console.log(carro)
carro.acelerar()
console.log(carro)

let concessionaria: Concessionaria = new Concessionaria("Rua dos Bobos, nº 0")
console.log(concessionaria)

let pessoa: Pessoa = new Pessoa("Harlan", "Fiesta")
console.log(pessoa)
console.log(pessoa.getCarroPreferido())
*/

/* Criar Carros */
let journey: Carro = new Carro("Journey", "Dodge")
let fiesta: Carro = new Carro("Fiesta", "Ford")
let hilux: Carro = new Carro("Hilux", "Toyota")

/* Lista de carros */
let listaCarros: Array<Carro> = [journey, fiesta, hilux]

/* Criar concessionaria */
let concessionaria: Concessionaria = new Concessionaria("Rua dos Bobos, nº 0", listaCarros)

/* Exibir a lista de carros da concessionaria */
//console.log(concessionaria.getListaCarros())

/* Criar pessoa */
let pessoa: Pessoa = new Pessoa("Harlan", "Fiesta")
//console.log(pessoa.getCarroPreferido())

/* Comprar carro */
concessionaria.getListaCarros().map((carro: Carro) => {
    if (carro['modelo'] == pessoa.getCarroPreferido()) {
        pessoa.comprarCarro(carro['modelo'])
    }
})