"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getTipo = function () {
        return this.tipo.toLowerCase();
    };
    return Cliente;
}());
exports.Cliente = Cliente;
