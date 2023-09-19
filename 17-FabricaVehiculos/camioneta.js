"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camioneta = void 0;
//Producto 2: camioneta, se define la estructura de la camioneta
var Camioneta = /** @class */ (function () {
    function Camioneta(marca, modelo, cantAsientos, capacidadCarga) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantAsientos = cantAsientos;
        this.capacidadCarga = capacidadCarga;
    }
    Camioneta.prototype.imprimirDatos = function () {
        console.log("Camioneta marca ".concat(this.marca, " - modelo ").concat(this.modelo));
        console.log("Asientos: ".concat(this.cantAsientos, " - Capacidad Carga: ").concat(this.capacidadCarga));
        console.log('');
    };
    return Camioneta;
}());
exports.Camioneta = Camioneta;
