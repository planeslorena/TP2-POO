"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiembroClub = void 0;
var MiembroClub = /** @class */ (function () {
    function MiembroClub(nombre, apellido, fechaDeNacimiento, dni, tel, miembroDesde) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.dni = dni;
        this.tel = tel;
        this.miembroDesde = miembroDesde;
    }
    return MiembroClub;
}());
exports.MiembroClub = MiembroClub;
