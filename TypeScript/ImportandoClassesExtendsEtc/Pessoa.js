"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Pessoa = Pessoa;
