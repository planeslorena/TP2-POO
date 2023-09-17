import { Cancion } from "./cancion";

export class Cd {
    private canciones: Cancion[];
    private contador: number;

    constructor() {
        this.canciones = [];
        this.contador = 0;
    }

    public contarCanciones(): number {
        return this.canciones.length;
    }

    public mostrarCanciones(posicion: number): void {
        console.log(`La canción n°${posicion} es ${this.canciones[posicion-1].getTitulo()} - ${this.canciones[posicion-1].getAutor()}`);
    }

    public grabarCancion(posicion: number, nuevaCancion: Cancion):void {
        let cancionAnt: Cancion = this.canciones[posicion-1];
        this.canciones[posicion-1] = nuevaCancion;
        console.log(`La cancion ${cancionAnt.getTitulo()} - ${cancionAnt.getAutor()} fue cambiada por la cancion ${nuevaCancion.getTitulo()} - ${nuevaCancion.getAutor()}`);
    }

    public agregarCancion(cancion: Cancion):void {
        this.canciones.push(cancion);
        this.contador++;
        console.log(`El CD tiene una nueva canción ${this.contador} - ${cancion.getTitulo()} - ${cancion.getAutor()}`);
    }

    public eliminarCancion(posicion: number):void {
        let cancionEliminada: Cancion = this.canciones[posicion-1];
        this.canciones.splice(posicion-1, 1);
        this.contador--;
        console.log(`Se elimino la canción n°${posicion} - ${cancionEliminada.getTitulo()} - ${cancionEliminada.getAutor()}`);
    }

    public listarCD():void {
        this.canciones.forEach((cancion, i) => {
            console.log(`${i+1}- ${cancion.getTitulo()} - ${cancion.getAutor()}`);
        });
    }
}