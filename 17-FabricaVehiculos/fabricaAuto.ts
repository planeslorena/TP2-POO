import { FabricaVehiculo } from "./fabrica";
import { Vehiculo } from "./vehiculo";
import { Auto } from "./auto";

//clase que define como se crea un auto
export class FabricaAuto extends FabricaVehiculo {
    fabricarVehiculo(marca: string, modelo: string, capacidadCarga: number): Vehiculo {
        return new Auto(marca, modelo, capacidadCarga);
    }
}