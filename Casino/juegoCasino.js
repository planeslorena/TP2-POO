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
exports.BlackJack = exports.Tragamonedas = exports.JuegoCasino = void 0;
var JuegoCasino = /** @class */ (function () {
    function JuegoCasino(nombre, premioMayor) {
        this.nombre = nombre;
        this.premioMayor = premioMayor;
    }
    JuegoCasino.prototype.jugar = function () {
        var ganador = Boolean(Math.round(Math.random()));
        if (ganador) {
            var premio = Math.round(Math.random() * this.premioMayor);
            console.log("Usted gano $".concat(premio));
        }
        else {
            console.log('Ha perdido la partida, mejor suerte la próxima');
        }
    };
    JuegoCasino.prototype.getNombre = function () {
        return this.nombre;
    };
    JuegoCasino.prototype.getPremioMayor = function () {
        return this.premioMayor;
    };
    return JuegoCasino;
}());
exports.JuegoCasino = JuegoCasino;
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(tematica) {
        var _this = _super.call(this, 'Tragamonedas', 500000) || this;
        _this.tematica = tematica;
        return _this;
    }
    Tragamonedas.prototype.jugar = function () {
        console.log("Bienvenido al ".concat(this.nombre, " ").concat(this.tematica));
        console.log('Tire la palanca.');
        _super.prototype.jugar.call(this);
    };
    return Tragamonedas;
}(JuegoCasino));
exports.Tragamonedas = Tragamonedas;
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack() {
        return _super.call(this, 'Black Jack', 100000) || this;
    }
    BlackJack.prototype.jugar = function () {
        console.log("Bienvenido al ".concat(this.nombre));
        _super.prototype.jugar.call(this);
    };
    return BlackJack;
}(JuegoCasino));
exports.BlackJack = BlackJack;
