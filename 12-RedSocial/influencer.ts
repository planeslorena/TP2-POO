import { Usuario } from "./usuario";
import { Colaboracion } from "./colaboracion";
import { Seguidor } from "./seguidor";

//Clase hija de Usuario
export class Influencer extends Usuario {
    private nroSeguidores: number;
    private seguidores: Seguidor[];

    constructor(nombre: string, email: string, contraseña: string) {
        super(nombre, email, contraseña);
        this.nroSeguidores = 0;
        this.seguidores = [];
    }

    //Funcion para agregar un seguidor a la lista de seguidores
    public agregarSeguidor(seguidor: Seguidor): void {
        this.seguidores.push(seguidor);
        this.nroSeguidores++;
    }

    //funcion para realizar un post en colaboracion con otro usuario.
    public realizarColaboracion(usuarioColab: Usuario, texto: string): void {
        const post = new Colaboracion(texto, usuarioColab);
        this.posts.push(post);
        console.log(`-----Nueva publicacion de ${this.nombre} en colaboracion con ${usuarioColab.getNombre()}-----`);
        console.log(texto);
    }
}