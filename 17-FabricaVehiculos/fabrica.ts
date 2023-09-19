import { Vehiculo } from "./vehiculo";

//Clase abstracta que define el metodo para la creacion de los dos tipos de vehiculos
export abstract class FabricaVehiculo {
    abstract fabricarVehiculo(marca: string, modelo: string, cantAsientos: number, capacidadCarga: number): Vehiculo;
}

