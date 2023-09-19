"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcesadorCliPlatino = void 0;
//Procesa la venta de un cliente Platino.
var ProcesadorCliPlatino = /** @class */ (function () {
    function ProcesadorCliPlatino() {
    }
    //A cada producto le realiza el descuento del 20%
    ProcesadorCliPlatino.prototype.procesarVenta = function (productos) {
        var totalVenta = 0;
        productos.forEach(function (producto) {
            totalVenta += producto.getPrecio() * .8;
        });
        return totalVenta;
    };
    return ProcesadorCliPlatino;
}());
exports.ProcesadorCliPlatino = ProcesadorCliPlatino;
