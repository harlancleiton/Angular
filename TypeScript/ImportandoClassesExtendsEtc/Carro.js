"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var VeiculoModel_1 = require("./VeiculoModel");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    //endregion Variables
    function Carro(modelo, marca) {
        var _this = _super.call(this) || this;
        _this.modelo = modelo;
        _this.marca = marca;
        return _this;
    }
    return Carro;
}(VeiculoModel_1.VeiculoModel));
exports.Carro = Carro;
