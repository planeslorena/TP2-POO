import { Usuario } from "./usuario";
import { Colaboracion } from "./colaboracion";
import { Seguidor } from "./seguidor";

export class Influencer extends Usuario{
    private nroSeguidores: number;
    private seguidores: Seguidor[];

    constructor(nombre:string, email:string,contraseña:string){
        super(nombre,email,contraseña);
        this.nroSeguidores = 0;
        this.seguidores= [];
    }

    public agregarSeguidor(seguidor: Seguidor):void {
        this.seguidores.push(seguidor);
        this.nroSeguidores ++;
    }

    public realizarColaboracion(usuarioColab:Usuario,texto:string):void {
        const post = new Colaboracion(texto,usuarioColab);
        this.posts.push(post);
        console.log(`-----Nueva publicacion de ${this.nombre} en colaboracion con ${usuarioColab.getNombre()}-----`);
        console.log(texto);
    }
}