import { Cuenta } from "./cuenta";

let cuenta1 = new Cuenta('Lorena Planes', 2589634);

cuenta1.retirar(200);
cuenta1.ingresar(15000.35);
cuenta1.mostrarCuenta();

let cuenta2 = new Cuenta('Patricio Salias', 2587412, 100000.12);

cuenta2.retirar(5000.24);
cuenta2.retirar(8000);
cuenta2.mostrarCuenta();
