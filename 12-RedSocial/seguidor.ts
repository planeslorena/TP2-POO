import { Influencer } from "./influencer";
import { Usuario } from "./usuario";

//Clase hija de Usuario.
export class Seguidor extends Usuario {
    private intereses: string[];
    private seguidos: Influencer[];

    constructor(nombre: string, email: string, contraseña: string, intereses: string[]) {
        super(nombre, email, contraseña);
        this.intereses = intereses;
        this.seguidos = [];
    }

    //Funcion que simula una busqueda de contenido segun los intereses del seguidor.
    public buscarContenidoRelacionado(): void {
        console.log(`${this.getNombre()} buscaremos contenido relacionado a:`);
        this.intereses.forEach(interes => {
            console.log(`* ${interes}`);
        });
    }

    //Funcion para seguir a un Influencer.
    public seguirInfluencer(influencer: Influencer) {
        this.seguidos.push(influencer);
        influencer.agregarSeguidor(this);
    }
}