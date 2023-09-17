"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autos = [];
    }
    RegistroAutomotor.prototype.darDeAlta = function (auto) {
        this.autos.push(auto);
    };
    RegistroAutomotor.prototype.consultarAuto = function (patente) {
        this.autos.forEach(function (auto) {
            if (auto.getPatente() == patente.toUpperCase()) {
                console.log('-------------------CONSULTA DE AUTOMOTOR------------------------');
                console.log("La patente: ".concat(patente, " pertenece a un ").concat(auto.getMarca(), " - ").concat(auto.getModelo(), " del a\u00F1o ").concat(auto.getAnio(), " "));
            }
        });
    };
    RegistroAutomotor.prototype.eliminarAuto = function (patente) {
        var _this = this;
        this.autos.forEach(function (auto, indice) {
            if (auto.getPatente() == patente.toUpperCase()) {
                _this.autos.splice(indice, 1);
                console.log("El automotor de patente ".concat(patente, " ha sido elimimado del registro."));
            }
        });
    };
    RegistroAutomotor.prototype.listarAutos = function () {
        console.log('-----------------LISTADO DE AUTOMOTORES DEL REGISTRO---------------------');
        this.autos.forEach(function (auto, indice) {
            console.log("".concat(indice + 1, " - ").concat(auto.getMarca(), " - ").concat(auto.getModelo(), " (").concat(auto.getAnio(), ") - Patente ").concat(auto.getPatente()));
        });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
