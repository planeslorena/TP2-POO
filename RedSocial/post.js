"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(texto) {
        this.texto = texto;
        this.meGusta = 0;
        this.comentarios = [];
    }
    Post.prototype.verPost = function () {
        console.log(this.texto);
        console.log("Me Gusta: ".concat(this.meGusta));
        console.log('Comentarios: ');
        this.comentarios.forEach(function (comentario) {
            console.log("   ".concat(comentario));
            console.log('');
        });
        console.log('');
    };
    Post.prototype.agregarComentario = function (texto) {
        this.comentarios.push(texto);
    };
    Post.prototype.sumarMeGusta = function () {
        this.meGusta++;
    };
    return Post;
}());
exports.Post = Post;
