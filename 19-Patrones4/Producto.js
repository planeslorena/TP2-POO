"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    return Producto;
}());
exports.Producto = Producto;
