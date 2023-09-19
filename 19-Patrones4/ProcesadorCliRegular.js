"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcesadorCliRegular = void 0;
//Procesa la venta de un cliente Regular
var ProcesadorCliRegular = /** @class */ (function () {
    function ProcesadorCliRegular() {
    }
    //Suma el total de los producto, porque el cliente regular no tiene descuento.
    ProcesadorCliRegular.prototype.procesarVenta = function (productos) {
        var totalVenta = 0;
        productos.forEach(function (producto) {
            totalVenta += producto.getPrecio();
        });
        return totalVenta;
    };
    return ProcesadorCliRegular;
}());
exports.ProcesadorCliRegular = ProcesadorCliRegular;
