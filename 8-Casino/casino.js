"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var rls = require("readline-sync");
var Casino = /** @class */ (function () {
    function Casino(nombre) {
        this.nombre = nombre;
        this.juegosCasino = [];
    }
    Casino.prototype.cargarJuego = function (juego) {
        this.juegosCasino.push(juego);
    };
    Casino.prototype.ingresarAlCasino = function () {
        console.log("----------Bienvenido a Casino ".concat(this.nombre, "-----------"));
        console.log('');
    };
    Casino.prototype.jugar = function () {
        console.log('HORA DE LA DIVERSION: a que queres jugar?');
        this.juegosCasino.forEach(function (juego, i) {
            console.log("".concat(i + 1, " - ").concat(juego.getNombre(), " por un premio de $").concat(juego.getPremioMayor()));
        });
        var juegoElegido = rls.questionInt('Ingresa el numero del juego:');
        console.log('');
        try {
            this.juegosCasino[juegoElegido - 1].jugar();
        }
        catch (error) {
            console.log('El numero no es valido, elegi uno de la lista asi comienza la diversión!');
            this.jugar();
        }
    };
    return Casino;
}());
exports.Casino = Casino;
