"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    //endregion Variables
    function Concessionaria(endereco, listaCarros) {
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    //region Methods
    Concessionaria.prototype.fornecerHorarioFuncionamento = function () {
        return "Seg - Sex : 8:00 - 18:00h";
    };
    Concessionaria.prototype.getEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.getListaCarros = function () {
        return this.listaCarros;
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
