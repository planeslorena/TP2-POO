"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(titulo, anioEstreno, temporadas, episodiosxtemporadas) {
        this.titulo = titulo;
        this.anioEstreno = anioEstreno;
        this.temporadas = temporadas;
        this.episodiosxtemporadas = episodiosxtemporadas;
        this.temporadaActual = 1;
        this.episodiosVistos = 0;
        this.finalizada = false;
    }
    Serie.prototype.verEpisodio = function () {
        if (this.finalizada) {
            console.log('La serie ya la viste completa, empezará de nuevo desde el primer capitulo.');
            this.temporadaActual = 1;
            this.episodiosVistos = 0;
        }
        if (this.episodiosVistos < this.episodiosxtemporadas[this.temporadaActual - 1]) {
            this.episodiosVistos += 1;
        }
        else if (this.temporadaActual < this.temporadas) {
            this.temporadaActual += 1;
            this.episodiosVistos = 1;
        }
        console.log("Usted esta viendo el episodio ".concat(this.episodiosVistos, " de la temporada ").concat(this.temporadaActual));
        if (this.episodiosVistos == this.episodiosxtemporadas[this.temporadaActual - 1] && this.temporadaActual == this.temporadas) {
            this.finalizada = true;
        }
    };
    Serie.prototype.episodiosxVer = function () {
        if (this.finalizada) {
            console.log("No te quedan episodios por ver de la serie ".concat(this.titulo));
        }
        else {
            var faltantesTempActual = this.episodiosxtemporadas[this.temporadaActual - 1] - this.episodiosVistos;
            console.log("Episodios por ver de la serie: ".concat(this.titulo));
            if (faltantesTempActual) {
                console.log("Temporada ".concat(this.temporadaActual, ": ").concat(faltantesTempActual, " episodios"));
            }
            for (var i = this.temporadaActual + 1; i <= this.temporadas; i++) {
                console.log("Temporada ".concat(i, ": ").concat(this.episodiosxtemporadas[i - 1], " episodios"));
            }
        }
    };
    Serie.prototype.serieVista = function () {
        if (this.finalizada) {
            console.log("Ya terminaste de ver ".concat(this.titulo));
        }
        else {
            console.log("Aun te quedan capitulos por ver de ".concat(this.titulo));
        }
    };
    Serie.prototype.consultarSerie = function () {
        console.log("Serie: ".concat(this.titulo, " (").concat(this.anioEstreno, ") - ").concat(this.temporadas, " temporadas."));
        for (var i = 0; i < this.temporadas; i++) {
            console.log("Temporada ".concat(i + 1, ": ").concat(this.episodiosxtemporadas[i], " episodios."));
        }
    };
    return Serie;
}());
exports.Serie = Serie;
