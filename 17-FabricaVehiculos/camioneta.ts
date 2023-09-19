import { Vehiculo } from "./vehiculo";

//Producto 2: camioneta, se define la estructura de la camioneta
export class Camioneta implements Vehiculo {
    protected marca: string;
    protected modelo: string;
    protected cantAsientos: number;
    protected capacidadCarga: number;

    constructor(marca: string, modelo: string, cantAsientos: number, capacidadCarga: number) {
        this.marca = marca
        this.modelo = modelo
        this.cantAsientos = cantAsientos
        this.capacidadCarga = capacidadCarga
    }

    imprimirDatos(): void {
        console.log(`Camioneta marca ${this.marca} - modelo ${this.modelo}`);
        console.log(`Asientos: ${this.cantAsientos} - Capacidad Carga: ${this.capacidadCarga}`);
        console.log('');
    }
}