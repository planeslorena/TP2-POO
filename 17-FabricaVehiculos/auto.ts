import { Vehiculo } from "./vehiculo";

//Producto 1: auto, se define la estructura del auto
export class Auto implements Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected cantAsientos: number;
    protected capacidadCarga: number;

    constructor(marca: string, modelo: string, capacidadCarga: number) {
        this.marca = marca
        this.modelo = modelo
        this.cantAsientos = 5;
        this.capacidadCarga = capacidadCarga
    }

    imprimirDatos(): void {
        console.log(`Auto marca ${this.marca} - modelo ${this.modelo}`);
        console.log(`Asientos: ${this.cantAsientos} - Capacidad Carga: ${this.capacidadCarga}`);
        console.log('');
    }
}