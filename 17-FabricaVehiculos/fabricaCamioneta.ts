import { FabricaVehiculo } from "./fabrica";
import { Vehiculo } from "./vehiculo";
import { Camioneta } from "./camioneta";

//clase que define como se crea una camioneta
export class FabricaCamioneta extends FabricaVehiculo {
    fabricarVehiculo(marca: string, modelo: string, cantAsientos: number, capacidadCarga: number): Vehiculo {
        return new Camioneta(marca, modelo, cantAsientos, capacidadCarga);
    }
}