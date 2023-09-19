"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcesadorCliGold = void 0;
//Procesa la venta a un cliente Gold
var ProcesadorCliGold = /** @class */ (function () {
    function ProcesadorCliGold() {
    }
    //Le aplica el descuento solo a los productos mayores a $10000 y suma el total de la venta
    ProcesadorCliGold.prototype.procesarVenta = function (productos) {
        var totalVenta = 0;
        productos.forEach(function (producto) {
            if (producto.getPrecio() > 10000) {
                totalVenta += producto.getPrecio() * .8;
            }
            else {
                totalVenta += producto.getPrecio();
            }
        });
        return totalVenta;
    };
    return ProcesadorCliGold;
}());
exports.ProcesadorCliGold = ProcesadorCliGold;
