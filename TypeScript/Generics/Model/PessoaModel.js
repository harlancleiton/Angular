"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PessoaModel = /** @class */ (function () {
    function PessoaModel(name, email) {
        this.name = name;
        this.email = email;
    }
    PessoaModel.prototype.getName = function () {
        return this.name;
    };
    PessoaModel.prototype.getEmail = function () {
        return this.email;
    };
    return PessoaModel;
}());
exports.PessoaModel = PessoaModel;
