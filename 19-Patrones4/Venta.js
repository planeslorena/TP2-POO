"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
var ProcesadorCliGold_1 = require("./ProcesadorCliGold");
var ProcesadorCliRegular_1 = require("./ProcesadorCliRegular");
var ProcesadorCliPlatino_1 = require("./ProcesadorCliPlatino");
var Venta = /** @class */ (function () {
    function Venta(cliente, productos) {
        this.cliente = cliente;
        this.productos = productos;
        //Defino la estrategia segun el tipo de cliente.
        if (this.cliente.getTipo() == 'regular') {
            this.procesador = new ProcesadorCliRegular_1.ProcesadorCliRegular();
        }
        else if (this.cliente.getTipo() == 'gold') {
            this.procesador = new ProcesadorCliGold_1.ProcesadorCliGold();
        }
        else {
            this.procesador = new ProcesadorCliPlatino_1.ProcesadorCliPlatino();
        }
    }
    Venta.prototype.getCliente = function () {
        return "Cliente: ".concat(this.cliente.getNombre(), " - Tipo: ").concat(this.cliente.getTipo());
    };
    Venta.prototype.calcularImporteVenta = function () {
        return this.procesador.procesarVenta(this.productos);
    };
    return Venta;
}());
exports.Venta = Venta;
