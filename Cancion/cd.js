"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cd = void 0;
var Cd = /** @class */ (function () {
    function Cd() {
        this.canciones = [];
        this.contador = 0;
    }
    Cd.prototype.contarCanciones = function () {
        return this.canciones.length;
    };
    Cd.prototype.mostrarCanciones = function (posicion) {
        console.log("La canci\u00F3n n\u00B0".concat(posicion, " es ").concat(this.canciones[posicion - 1].getTitulo(), " - ").concat(this.canciones[posicion - 1].getAutor()));
    };
    Cd.prototype.grabarCancion = function (posicion, nuevaCancion) {
        var cancionAnt = this.canciones[posicion - 1];
        this.canciones[posicion - 1] = nuevaCancion;
        console.log("La cancion ".concat(cancionAnt.getTitulo(), " - ").concat(cancionAnt.getAutor(), " fue cambiada por la cancion ").concat(nuevaCancion.getTitulo(), " - ").concat(nuevaCancion.getAutor()));
    };
    Cd.prototype.agregarCancion = function (cancion) {
        this.canciones.push(cancion);
        this.contador++;
        console.log("El CD tiene una nueva canci\u00F3n ".concat(this.contador, " - ").concat(cancion.getTitulo(), " - ").concat(cancion.getAutor()));
    };
    Cd.prototype.eliminarCancion = function (posicion) {
        var cancionEliminada = this.canciones[posicion - 1];
        this.canciones.splice(posicion - 1, 1);
        this.contador--;
        console.log("Se elimino la canci\u00F3n n\u00B0".concat(posicion, " - ").concat(cancionEliminada.getTitulo(), " - ").concat(cancionEliminada.getAutor()));
    };
    Cd.prototype.listarCD = function () {
        this.canciones.forEach(function (cancion, i) {
            console.log("".concat(i + 1, "- ").concat(cancion.getTitulo(), " - ").concat(cancion.getAutor()));
        });
    };
    return Cd;
}());
exports.Cd = Cd;
