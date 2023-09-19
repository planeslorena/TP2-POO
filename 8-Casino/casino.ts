import { JuegoCasino } from "./juegoCasino";
import * as rls from 'readline-sync';

export class Casino {
    private nombre: string;
    private juegosCasino: JuegoCasino[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.juegosCasino = [];
    }

    //Agrega los juegos al casino
    public cargarJuego(juego: JuegoCasino) {
        this.juegosCasino.push(juego);
    }

    //funcion que da la bienvenida al jugador
    public ingresarAlCasino(): void {
        console.log(`----------Bienvenido a Casino ${this.nombre}-----------`);
        console.log('');

    }

    //funcion para jugar, da a elegir al usuario el juego.
    public jugar(): void {
        console.log('HORA DE LA DIVERSION: a que queres jugar?')
        this.juegosCasino.forEach((juego, i) => {
            console.log(`${i + 1} - ${juego.getNombre()} por un premio de $${juego.getPremioMayor()}`);
        });
        const juegoElegido: number = rls.questionInt('Ingresa el numero del juego:');
        console.log('');

        try {
            this.juegosCasino[juegoElegido - 1].jugar();
        } catch (error) {
            console.log('El numero no es valido, elegi uno de la lista asi comienza la diversión!');
            this.jugar();
        }
    }
}