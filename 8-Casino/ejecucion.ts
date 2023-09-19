import { Casino } from "./casino";
import { Tragamonedas } from "./juegoCasino";
import { BlackJack } from "./juegoCasino";

let tragamonedas = new Tragamonedas('Zombie');
let blackJack = new BlackJack();
let casino = new Casino('Las Vegas');

casino.cargarJuego(tragamonedas);
casino.cargarJuego(blackJack);
casino.ingresarAlCasino();
casino.jugar();
casino.jugar();

