"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VeiculoModel = /** @class */ (function () {
    //endregion Variables
    function VeiculoModel() {
        this.velocidadeAtual = 0;
    }
    //region Methods
    VeiculoModel.prototype.acelerar = function () {
        this.velocidadeAtual += 10;
    };
    VeiculoModel.prototype.parar = function () {
        this.velocidadeAtual = 0;
    };
    VeiculoModel.prototype.getVelocidadeAtual = function () {
        return this.velocidadeAtual;
    };
    return VeiculoModel;
}());
exports.VeiculoModel = VeiculoModel;
