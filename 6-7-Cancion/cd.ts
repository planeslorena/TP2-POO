import { Cancion } from "./cancion";

export class Cd {
    private canciones: Cancion[];
    private contador: number;

    constructor() {
        this.canciones = [];
        this.contador = 0;
    }

    //Funcion que devuelve la cantidad de canciones del CD
    public contarCanciones(): number {
        return this.canciones.length;
    }

    //Funcion que imprime por consola la cancion de la posicion indicada
    public mostrarCanciones(posicion: number): void {
        console.log(`La canción n°${posicion} es ${this.canciones[posicion - 1].getTitulo()} - ${this.canciones[posicion - 1].getAutor()}`);
    }

    //Funcion para reescribir una cancion ya grabada
    public grabarCancion(posicion: number, nuevaCancion: Cancion): void {
        if (posicion > this.canciones.length) {
            console.log(`No existe la posición ${posicion} en el cd, si quiere puede utilizar la función agregarCaancion`);
        } else {
            let cancionAnt: Cancion = this.canciones[posicion - 1];
            this.canciones[posicion - 1] = nuevaCancion;
            console.log(`La cancion ${cancionAnt.getTitulo()} - ${cancionAnt.getAutor()} fue cambiada por la cancion ${nuevaCancion.getTitulo()} - ${nuevaCancion.getAutor()}`);
        }
    }

    //Funcion para agregar un cancion al CD
    public agregarCancion(cancion: Cancion): void {
        this.canciones.push(cancion);
        this.contador++;
        console.log(`El CD tiene una nueva canción ${this.contador} - ${cancion.getTitulo()} - ${cancion.getAutor()}`);
    }

    //Elimina la cancion de la posicion indicada
    public eliminarCancion(posicion: number): void {
        if (posicion > this.canciones.length) {
            console.log(`No existe la posición ${posicion} en el cd`);
        } else {
            let cancionEliminada: Cancion = this.canciones[posicion - 1];
            this.canciones.splice(posicion - 1, 1);
            this.contador--;
            console.log(`Se elimino la canción n°${posicion} - ${cancionEliminada.getTitulo()} - ${cancionEliminada.getAutor()}`);
        }
    }

    //Funcion para listar por consola todas las canciones.
    public listarCD(): void {
        this.canciones.forEach((cancion, i) => {
            console.log(`${i + 1}- ${cancion.getTitulo()} - ${cancion.getAutor()}`);
        });
    }
}