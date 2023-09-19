"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorClub = void 0;
var Jugador_1 = require("./Jugador");
var fs = require("fs");
var path = require("path");
var rls = require("readline-sync");
var GestorClub = /** @class */ (function () {
    function GestorClub(nombreClub) {
        this.path = path.resolve('./socios.json');
        this.nombreClub = nombreClub;
    }
    //Pide por consola los datos al usuario para dar de alta un nuevo socio.
    GestorClub.prototype.darAltaSocio = function () {
        console.log('INGRESE LOS DATOS DEL NUEVO SOCIO:');
        var nombre = rls.question('Nombre:');
        var apellido = rls.question('Apellido:');
        var fechaDeNacimiento = rls.question('Fecha de Nacimiento (formato dd/mm/aaaa):');
        var dni = rls.questionInt('DNI');
        var tel = rls.questionInt('Telefono:');
        var miembroDesde = rls.question('Fecha de alta (formato dd/mm/aaaa):');
        var deporte = rls.questionInt("Deporte (Futbol = 0, Basquet = 1, Zumba = 2, Voley = 3, Natacion = 4, Gym= 5):");
        var nuevoSocio = new Jugador_1.Jugador(nombre, apellido, fechaDeNacimiento, dni, tel, miembroDesde, deporte);
        //Guarda los datos en un archivo json
        fs.writeFileSync(this.path, "".concat(JSON.stringify(nuevoSocio), "\n"), { flag: 'a' });
    };
    GestorClub.prototype.listarSocios = function () {
        var data = fs.readFileSync(this.path, { encoding: 'utf8', flag: 'r' });
        console.log(JSON.parse(data));
    };
    GestorClub.prototype.buscarSocio = function () {
    };
    return GestorClub;
}());
exports.GestorClub = GestorClub;
