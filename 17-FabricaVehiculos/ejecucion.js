"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fabricaAuto_1 = require("./fabricaAuto");
var fabricaCamioneta_1 = require("./fabricaCamioneta");
var rls = require("readline-sync");
var fabrica1 = new fabricaAuto_1.FabricaAuto();
var fabrica2 = new fabricaCamioneta_1.FabricaCamioneta();
console.log('Ingrese los datos del nuevo vehiculo:');
var marca = rls.question('Indique la marca:');
var modelo = rls.question('Indique el modelo:');
var cantAsientos = rls.questionInt('Indique la cantidad de asiestos:');
var capacidadCarga = rls.questionInt('Indique la marca del vehiculo:');
if (cantAsientos > 5 || capacidadCarga > 200) {
    fabrica2.fabricarVehiculo(marca, modelo, cantAsientos, capacidadCarga).imprimirDatos();
}
else {
    fabrica1.fabricarVehiculo(marca, modelo, capacidadCarga).imprimirDatos();
}
