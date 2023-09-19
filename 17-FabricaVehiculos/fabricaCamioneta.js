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
exports.FabricaCamioneta = void 0;
var fabrica_1 = require("./fabrica");
var camioneta_1 = require("./camioneta");
//clase que define como se crea una camioneta
var FabricaCamioneta = /** @class */ (function (_super) {
    __extends(FabricaCamioneta, _super);
    function FabricaCamioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabricaCamioneta.prototype.fabricarVehiculo = function (marca, modelo, cantAsientos, capacidadCarga) {
        return new camioneta_1.Camioneta(marca, modelo, cantAsientos, capacidadCarga);
    };
    return FabricaCamioneta;
}(fabrica_1.FabricaVehiculo));
exports.FabricaCamioneta = FabricaCamioneta;
