import { Carro } from './Carro'
import { MotoModel } from './MotoModel'
import { Pessoa } from './Pessoa'
import { Concessionaria } from './Concessionaria'
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

let motoModel: MotoModel = new MotoModel("Honda", "CG 300")

console.log("Acelerar Hilux")
hilux.acelerar()
console.log("Velocidade atual Hilux: " + hilux.getVelocidadeAtual())
console.log("Acelerar Moto")
motoModel.acelerar()
console.log("Velocidade atual Moto: " + motoModel.getVelocidadeAtual())
console.log(concessionaria.fornecerHorarioFuncionamento()) //Acessando metodo da interface implementada pela classe