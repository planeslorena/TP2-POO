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
exports.Seguidor = void 0;
var usuario_1 = require("./usuario");
var Seguidor = /** @class */ (function (_super) {
    __extends(Seguidor, _super);
    function Seguidor(nombre, email, contraseña, intereses) {
        var _this = _super.call(this, nombre, email, contraseña) || this;
        _this.intereses = intereses;
        _this.seguidos = [];
        return _this;
    }
    Seguidor.prototype.buscarContenidoRelacionado = function () {
        console.log("".concat(this.getNombre(), " buscaremos contenido relacionado a:"));
        this.intereses.forEach(function (interes) {
            console.log("* ".concat(interes));
        });
    };
    Seguidor.prototype.seguirInfluencer = function (influencer) {
        this.seguidos.push(influencer);
        influencer.agregarSeguidor(this);
    };
    return Seguidor;
}(usuario_1.Usuario));
exports.Seguidor = Seguidor;
