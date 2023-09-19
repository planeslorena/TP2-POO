"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cd = void 0;
var Cd = /** @class */ (function () {
    function Cd() {
        this.canciones = [];
        this.contador = 0;
    }
    //Funcion que devuelve la cantidad de canciones del CD
    Cd.prototype.contarCanciones = function () {
        return this.canciones.length;
    };
    //Funcion que imprime por consola la cancion de la posicion indicada
    Cd.prototype.mostrarCanciones = function (posicion) {
        console.log("La canci\u00F3n n\u00B0".concat(posicion, " es ").concat(this.canciones[posicion - 1].getTitulo(), " - ").concat(this.canciones[posicion - 1].getAutor()));
    };
    //Funcion para reescribir una cancion ya grabada
    Cd.prototype.grabarCancion = function (posicion, nuevaCancion) {
        if (posicion > this.canciones.length) {
            console.log("No existe la posici\u00F3n ".concat(posicion, " en el cd, si quiere puede utilizar la funci\u00F3n agregarCaancion"));
        }
        else {
            var cancionAnt = this.canciones[posicion - 1];
            this.canciones[posicion - 1] = nuevaCancion;
            console.log("La cancion ".concat(cancionAnt.getTitulo(), " - ").concat(cancionAnt.getAutor(), " fue cambiada por la cancion ").concat(nuevaCancion.getTitulo(), " - ").concat(nuevaCancion.getAutor()));
        }
    };
    //Funcion para agregar un cancion al CD
    Cd.prototype.agregarCancion = function (cancion) {
        this.canciones.push(cancion);
        this.contador++;
        console.log("El CD tiene una nueva canci\u00F3n ".concat(this.contador, " - ").concat(cancion.getTitulo(), " - ").concat(cancion.getAutor()));
    };
    //Elimina la cancion de la posicion indicada
    Cd.prototype.eliminarCancion = function (posicion) {
        if (posicion > this.canciones.length) {
            console.log("No existe la posici\u00F3n ".concat(posicion, " en el cd"));
        }
        else {
            var cancionEliminada = this.canciones[posicion - 1];
            this.canciones.splice(posicion - 1, 1);
            this.contador--;
            console.log("Se elimino la canci\u00F3n n\u00B0".concat(posicion, " - ").concat(cancionEliminada.getTitulo(), " - ").concat(cancionEliminada.getAutor()));
        }
    };
    //Funcion para listar por consola todas las canciones.
    Cd.prototype.listarCD = function () {
        this.canciones.forEach(function (cancion, i) {
            console.log("".concat(i + 1, "- ").concat(cancion.getTitulo(), " - ").concat(cancion.getAutor()));
        });
    };
    return Cd;
}());
exports.Cd = Cd;
