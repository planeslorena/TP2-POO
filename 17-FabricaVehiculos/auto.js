"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
//Producto 1: auto, se define la estructura del auto
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, capacidadCarga) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantAsientos = 5;
        this.capacidadCarga = capacidadCarga;
    }
    Auto.prototype.imprimirDatos = function () {
        console.log("Auto marca ".concat(this.marca, " - modelo ").concat(this.modelo));
        console.log("Asientos: ".concat(this.cantAsientos, " - Capacidad Carga: ").concat(this.capacidadCarga));
        console.log('');
    };
    return Auto;
}());
exports.Auto = Auto;
