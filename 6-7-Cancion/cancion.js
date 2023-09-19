"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancion = void 0;
var Cancion = /** @class */ (function () {
    function Cancion(titulo, autor) {
        if (titulo && autor) {
            this.titulo = titulo;
            this.autor = autor;
        }
        else {
            this.titulo = '';
            this.autor = '';
        }
    }
    Cancion.prototype.getTitulo = function () {
        return this.titulo;
    };
    Cancion.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    return Cancion;
}());
exports.Cancion = Cancion;
