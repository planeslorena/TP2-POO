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
        this.socios = [];
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
        this.socios.push(nuevoSocio);
        //Guarda los datos en un archivo json
        fs.writeFileSync(this.path, JSON.stringify(this.socios));
    };
    GestorClub.prototype.listarSocios = function () {
        //const data = fs.readFileSync(this.path, { encoding: 'utf8', flag: 'r' });
        //console.log(JSON.parse(data));
        //Muestra por consola el listado de socios con nombre, apellido y deporte que realizan.
        console.log("-----Listado de socios Club ".concat(this.nombreClub, "------"));
        this.socios.forEach(function (socio, i) {
            console.log("".concat(i + 1, "- ").concat(socio.nombre, " ").concat(socio.apellido, " - DNI: ").concat(socio.dni, " - Deporte: ").concat(socio.getDeporte(), " "));
        });
        console.log('');
    };
    //funcion para buscar socios por Apellido, lista a todos los socios con el apellido indicado
    GestorClub.prototype.buscarSocioxApellido = function (apellido) {
        var sociosBuscados = this.socios.filter(function (jugador) { return jugador.apellido.toLowerCase() == apellido.toLowerCase(); });
        if (sociosBuscados.length > 0) {
            console.log("Socios de apellido ".concat(apellido, ":"));
            sociosBuscados.forEach(function (socio) {
                console.log("".concat(socio.nombre, " ").concat(socio.apellido, " - DNI: ").concat(socio.dni, " - Deporte: ").concat(socio.getDeporte(), " "));
            });
        }
        else {
            console.log("No existe en la nomina de socios nadie de apellido ".concat(apellido));
        }
        console.log('');
    };
    //funcion para buscar socios por dni
    GestorClub.prototype.buscarSocioxDni = function (dni) {
        var sociosBuscados = this.socios.filter(function (jugador) { return jugador.dni == dni; });
        if (sociosBuscados.length > 0) {
            sociosBuscados.forEach(function (socio) {
                console.log("".concat(socio.nombre, " ").concat(socio.apellido, " - DNI: ").concat(socio.dni, " - Deporte: ").concat(socio.getDeporte(), " "));
            });
        }
        else {
            console.log("No existe en la nomina de socios nadie con DNI: ".concat(dni));
        }
        console.log('');
    };
    //funcion para buscar socios por deporte
    GestorClub.prototype.buscarSocioxDeporte = function (deporte) {
        var sociosBuscados = this.socios.filter(function (jugador) { return jugador.getDeporte().toLowerCase() == deporte.toLowerCase(); });
        if (sociosBuscados.length > 0) {
            console.log("Socios que realizan ".concat(deporte, ":"));
            sociosBuscados.forEach(function (socio) {
                console.log("".concat(socio.nombre, " ").concat(socio.apellido, " - DNI: ").concat(socio.dni, " - Deporte: ").concat(socio.getDeporte(), " "));
            });
        }
        else {
            console.log("No hay socios que realicen el deporte indicado.");
        }
        console.log('');
    };
    return GestorClub;
}());
exports.GestorClub = GestorClub;
