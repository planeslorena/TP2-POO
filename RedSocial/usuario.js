"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var post_1 = require("./post");
var Usuario = /** @class */ (function () {
    function Usuario(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.posts = [];
    }
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.publicarPost = function (texto) {
        var post = new post_1.Post(texto);
        this.posts.push(post);
        console.log("-----Nueva publicacion de ".concat(this.nombre, "-----"));
        console.log(texto);
    };
    Usuario.prototype.comentarPost = function (usuario, texto, nroPost) {
        usuario.posts[nroPost - 1].agregarComentario(texto);
    };
    Usuario.prototype.darMegusta = function (usuario, nroPost) {
        usuario.posts[nroPost - 1].sumarMeGusta();
    };
    Usuario.prototype.verPosts = function () {
        console.log("-----Posteos de ".concat(this.nombre, "-----"));
        this.posts.forEach(function (post) {
            post.verPost();
        });
    };
    return Usuario;
}());
exports.Usuario = Usuario;
