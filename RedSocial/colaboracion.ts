import { Post } from "./post";
import { Usuario } from "./usuario";

export class Colaboracion extends Post {
    private usuarioColab: Usuario;

    constructor(texto:string, usuarioColab: Usuario) {
        super(texto);
        this.usuarioColab = usuarioColab;
    }

    public verPost(): void {
        console.log(`Post realizado en colaboracion con ${this.usuarioColab.getNombre()}`);
        super.verPost();
        console.log('');
    }
}