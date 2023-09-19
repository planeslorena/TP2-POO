import { Post } from "./post";
import { Usuario } from "./usuario";

//Clase hija de Post, es un post que se hace entre dos usuarios
export class Colaboracion extends Post {
    private usuarioColab: Usuario;

    constructor(texto:string, usuarioColab: Usuario) {
        super(texto);
        this.usuarioColab = usuarioColab;
    }

    //Funcion que muestra el post, el usuario colaborador, sus comentarios y cant de me gusta.
    public verPost(): void {
        console.log(`Post realizado en colaboracion con ${this.usuarioColab.getNombre()}`);
        super.verPost();
        console.log('');
    }
}