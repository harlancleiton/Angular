"use strict";
var Carro = /** @class */ (function () {
    //endregion Variables
    function Carro(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca;
    }
    //region Methods
    Carro.prototype.acelerar = function () {
        this.velocidadeMaxima += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidadeAtual = 0;
    };
    Carro.prototype.getVelocidadeAtual = function () {
        return this.velocidadeAtual;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    //endregion Variables
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    //region Methods
    Concessionaria.prototype.getEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.getListaCarros = function () {
        return this.listaCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    //endregion Variables
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    //region Methods
    Pessoa.prototype.getCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (modelo) {
        console.log(modelo + " comprado com sucesso!");
    };
    return Pessoa;
}());
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
var journey = new Carro("Journey", "Dodge");
var fiesta = new Carro("Fiesta", "Ford");
var hilux = new Carro("Hilux", "Toyota");
/* Lista de carros */
var listaCarros = [journey, fiesta, hilux];
/* Criar concessionaria */
var concessionaria = new Concessionaria("Rua dos Bobos, nº 0", listaCarros);
/* Exibir a lista de carros da concessionaria */
//console.log(concessionaria.getListaCarros())
/* Criar pessoa */
var pessoa = new Pessoa("Harlan", "Fiesta");
//console.log(pessoa.getCarroPreferido())
/* Comprar carro */
concessionaria.getListaCarros().map(function (carro) {
    if (carro['modelo'] == pessoa.getCarroPreferido()) {
        pessoa.comprarCarro(carro['modelo']);
    }
});
