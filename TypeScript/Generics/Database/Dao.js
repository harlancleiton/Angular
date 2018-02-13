"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        //region Variables
        this.table = "";
        //endregion Methods
    }
    //endregion Variables
    //region Methods
    Dao.prototype.insert = function (object) {
        console.log("Insert");
        return true;
    };
    Dao.prototype.update = function (object) {
        console.log("Update");
        return true;
    };
    Dao.prototype.delete = function (id) {
        console.log("Delete");
        return true;
    };
    Dao.prototype.select = function (id) {
        console.log("Select");
        return true;
    };
    Dao.prototype.selectAll = function () {
        console.log("Insert");
        return null;
    };
    return Dao;
}());
exports.Dao = Dao;
