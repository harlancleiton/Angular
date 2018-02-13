"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var MotoModel_1 = require("./MotoModel");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = require("./Concessionaria");
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
var journey = new Carro_1.Carro("Journey", "Dodge");
var fiesta = new Carro_1.Carro("Fiesta", "Ford");
var hilux = new Carro_1.Carro("Hilux", "Toyota");
/* Lista de carros */
var listaCarros = [journey, fiesta, hilux];
/* Criar concessionaria */
var concessionaria = new Concessionaria_1.Concessionaria("Rua dos Bobos, nº 0", listaCarros);
/* Exibir a lista de carros da concessionaria */
//console.log(concessionaria.getListaCarros())
/* Criar pessoa */
var pessoa = new Pessoa_1.Pessoa("Harlan", "Fiesta");
//console.log(pessoa.getCarroPreferido())
/* Comprar carro */
concessionaria.getListaCarros().map(function (carro) {
    if (carro['modelo'] == pessoa.getCarroPreferido()) {
        pessoa.comprarCarro(carro['modelo']);
    }
});
var motoModel = new MotoModel_1.MotoModel("Honda", "CG 300");
console.log("Acelerar Hilux");
hilux.acelerar();
console.log("Velocidade atual Hilux: " + hilux.getVelocidadeAtual());
console.log("Acelerar Moto");
motoModel.acelerar();
console.log("Velocidade atual Moto: " + motoModel.getVelocidadeAtual());
console.log(concessionaria.fornecerHorarioFuncionamento()); //Acessando metodo da interface implementada pela classe
