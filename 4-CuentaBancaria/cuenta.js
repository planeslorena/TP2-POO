"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, nroCuenta, saldo) {
        this.titular = titular;
        this.nroCuenta = nroCuenta;
        if (saldo) {
            this.saldo = saldo;
        }
        else {
            this.saldo = 0;
        }
    }
    Cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    Cuenta.prototype.setTitular = function (titular) {
        this.titular = titular;
    };
    Cuenta.prototype.getNroCuenta = function () {
        return this.nroCuenta;
    };
    Cuenta.prototype.setNroCuenta = function (nroCuenta) {
        this.nroCuenta = nroCuenta;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.mostrarCuenta = function () {
        console.log("Cuenta n\u00B0 ".concat(this.nroCuenta, " perteneciente a ").concat(this.titular, " con un saldo de $").concat(this.saldo));
    };
    Cuenta.prototype.ingresar = function (monto) {
        this.saldo += monto;
        console.log("Se realiz\u00F3 un deposito de $".concat(monto, ", su saldo actual es $").concat(this.saldo));
    };
    Cuenta.prototype.retirar = function (monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            console.log("Se extrajeron $".concat(monto, ", su saldo actual es de $").concat(this.saldo));
        }
        else {
            console.log("Saldo insuficiente.");
        }
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
