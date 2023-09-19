"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, patente, anio) {
        this.modelo = modelo;
        this.marca = marca;
        this.patente = patente;
        this.anio = anio;
    }
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    return Auto;
}());
exports.Auto = Auto;
