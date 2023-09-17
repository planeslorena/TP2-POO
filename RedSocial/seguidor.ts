import { Influencer } from "./influencer";
import { Usuario } from "./usuario";

export class Seguidor extends Usuario {
    private intereses: string[];
    private seguidos: Influencer[];

    constructor(nombre:string, email:string,contraseña:string,intereses:string[]){
        super(nombre,email,contraseña);
        this.intereses = intereses;
        this.seguidos = [];
    }

    public buscarContenidoRelacionado (): void{
        console.log(`${this.getNombre()} buscaremos contenido relacionado a:`);
        this.intereses.forEach(interes => {
            console.log(`* ${interes}`);
        });
    }

    public seguirInfluencer(influencer:Influencer) {
        this.seguidos.push(influencer);
        influencer.agregarSeguidor(this);
    }
}