import { FabricaAuto } from "./fabricaAuto";
import { FabricaCamioneta } from "./fabricaCamioneta";
import * as rls from 'readline-sync';

const fabrica1 = new FabricaAuto();
const fabrica2 = new FabricaCamioneta();

console.log('Ingrese los datos del nuevo vehiculo:');
let marca: string = rls.question('Indique la marca:');
let modelo: string = rls.question('Indique el modelo:');
let cantAsientos: number = rls.questionInt('Indique la cantidad de asiestos:');
let capacidadCarga: number = rls.questionInt('Indique la marca del vehiculo:');

if (cantAsientos > 5 || capacidadCarga > 200) {
    fabrica2.fabricarVehiculo(marca, modelo, cantAsientos, capacidadCarga).imprimirDatos();
} else {
    fabrica1.fabricarVehiculo(marca, modelo, capacidadCarga).imprimirDatos();
}

