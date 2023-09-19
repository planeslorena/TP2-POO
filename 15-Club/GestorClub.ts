import { Deporte } from "./Deporte";
import { Jugador } from "./Jugador";
import * as fs from 'fs';
import * as path from 'path';
import * as rls from 'readline-sync';


export class GestorClub {
    private nombreClub: string;
    private path = path.resolve('./socios.json');

    constructor(nombreClub: string) {
        this.nombreClub = nombreClub;
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

        //Guarda los datos en un archivo json
        fs.writeFileSync(this.path, `${JSON.stringify(nuevoSocio)}\n`, { flag: 'a' });

    }

    public listarSocios() {
        const data = fs.readFileSync(this.path, { encoding: 'utf8', flag: 'r' });
        console.log(JSON.parse(data));
    }

    public buscarSocio() {

    }
}