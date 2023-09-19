"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaAuto = void 0;
var fabrica_1 = require("./fabrica");
var auto_1 = require("./auto");
//clase que define como se crea un auto
var FabricaAuto = /** @class */ (function (_super) {
    __extends(FabricaAuto, _super);
    function FabricaAuto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricaAuto.prototype.fabricarVehiculo = function (marca, modelo, capacidadCarga) {
        return new auto_1.Auto(marca, modelo, capacidadCarga);
    };
    return FabricaAuto;
}(fabrica_1.FabricaVehiculo));
exports.FabricaAuto = FabricaAuto;
