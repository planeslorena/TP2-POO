import { Auto } from "./Auto";
import { RegistroAutomotor } from "./Registro";

//Creo varios autos y los ingreso en el registro automotor.
let auto1 = new Auto('Ford', 'Focus', 'AB765RT', 2015);
let auto2 = new Auto('Toyota', 'Corolla', 'AC695LJ', 2018);
let auto3 = new Auto('Peugeot', '408', 'AF254CC', 2020);
let auto4 = new Auto('Citroen', 'C4', 'AA985KJ', 2016);

let registro = new RegistroAutomotor();
registro.darDeAlta(auto1);
registro.darDeAlta(auto2);
registro.darDeAlta(auto3);
registro.darDeAlta(auto4);

//Ejecuto las diferentes funciones del registro.
registro.consultarAuto('ab765rt');
registro.listarAutos();
registro.eliminarAuto('AF254CC');
registro.listarAutos();