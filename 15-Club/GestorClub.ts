import { Deporte } from "./Deporte";
import { Jugador } from "./Jugador";
import * as fs from 'fs';
import * as path from 'path';
import * as rls from 'readline-sync';
import { MiembroClub } from "./MiembroClub";


export class GestorClub {
    private nombreClub: string;
    private socios: Jugador[]
    private path = path.resolve('./socios.json');

    constructor(nombreClub: string) {
        this.nombreClub = nombreClub;
        this.socios = [];
    }

    //Pide por consola los datos al usuario para dar de alta un nuevo socio.
    public darAltaSocio() {
        console.log('INGRESE LOS DATOS DEL NUEVO SOCIO:');
        let nombre: string = rls.question('Nombre:');
        let apellido: string = rls.question('Apellido:');
        let fechaDeNacimiento: string = rls.question('Fecha de Nacimiento (formato dd/mm/aaaa):');
        let dni: number = rls.questionInt('DNI');
        let tel: number = rls.questionInt('Telefono:');
        let miembroDesde: string = rls.question('Fecha de alta (formato dd/mm/aaaa):');
        let deporte: Deporte = rls.questionInt(`Deporte (Futbol = 0, Basquet = 1, Zumba = 2, Voley = 3, Natacion = 4, Gym= 5):`);

        let nuevoSocio = new Jugador(nombre, apellido, fechaDeNacimiento, dni, tel, miembroDesde, deporte);
        this.socios.push(nuevoSocio);
        //Guarda los datos en un archivo json
        fs.writeFileSync(this.path, JSON.stringify(this.socios));

    }

    public listarSocios() {
        //const data = fs.readFileSync(this.path, { encoding: 'utf8', flag: 'r' });
        //console.log(JSON.parse(data));

        //Muestra por consola el listado de socios con nombre, apellido y deporte que realizan.
        console.log(`-----Listado de socios Club ${this.nombreClub}------`)
        this.socios.forEach((socio, i) => {
            console.log(`${i + 1}- ${socio.nombre} ${socio.apellido} - DNI: ${socio.dni} - Deporte: ${socio.getDeporte()} `);
        });
        console.log('');
    }

    //funcion para buscar socios por Apellido, lista a todos los socios con el apellido indicado
    public buscarSocioxApellido(apellido: string) {
        let sociosBuscados = this.socios.filter(jugador => jugador.apellido.toLowerCase() == apellido.toLowerCase());
        if (sociosBuscados.length > 0) {
            console.log(`Socios de apellido ${apellido}:`);
            sociosBuscados.forEach(socio => {
                console.log(`${socio.nombre} ${socio.apellido} - DNI: ${socio.dni} - Deporte: ${socio.getDeporte()} `);
            });
        } else {
            console.log(`No existe en la nomina de socios nadie de apellido ${apellido}`);
        }
        console.log('');
    }

    //funcion para buscar socios por dni
    public buscarSocioxDni(dni: number) {
        let sociosBuscados = this.socios.filter(jugador => jugador.dni == dni);
        if (sociosBuscados.length > 0) {
            sociosBuscados.forEach(socio => {
                console.log(`${socio.nombre} ${socio.apellido} - DNI: ${socio.dni} - Deporte: ${socio.getDeporte()} `);
            });
        } else {
            console.log(`No existe en la nomina de socios nadie con DNI: ${dni}`);
        }
        console.log('');
    }

    //funcion para buscar socios por deporte
    public buscarSocioxDeporte(deporte: string) {
        let sociosBuscados = this.socios.filter(jugador => jugador.getDeporte().toLowerCase() == deporte.toLowerCase());
        if (sociosBuscados.length > 0) {
            console.log(`Socios que realizan ${deporte}:`);
            sociosBuscados.forEach(socio => {
                console.log(`${socio.nombre} ${socio.apellido} - DNI: ${socio.dni} - Deporte: ${socio.getDeporte()} `);
            });
        } else {
            console.log(`No hay socios que realicen el deporte indicado.`);
        }
        console.log('');
    }
}