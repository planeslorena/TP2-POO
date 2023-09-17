export class JuegoCasino {
    protected nombre: string;
    protected premioMayor: number;

    constructor(nombre: string,premioMayor: number) {
        this.nombre = nombre;
        this.premioMayor = premioMayor;
    }

    public jugar() {
        let ganador: boolean = Boolean(Math.round(Math.random()));

        if (ganador) {
            let premio:number = Math.round(Math.random()*this.premioMayor);
            console.log(`Usted gano $${premio}`);
        } else {
            console.log('Ha perdido la partida, mejor suerte la próxima');
        }
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPremioMayor(): number {
        return this.premioMayor;
    }
}

export class Tragamonedas extends JuegoCasino {
    private tematica: string;

    constructor (tematica:string) {
        super('Tragamonedas',500000);
        this.tematica = tematica;
    }

    public jugar():void {
        console.log(`Bienvenido al ${this.nombre} ${this.tematica}`);
        console.log('Tire la palanca.');
        super.jugar();
    }
}

export class BlackJack extends JuegoCasino {
    constructor () {
        super('Black Jack',100000);
    }

    public jugar():void {
        console.log(`Bienvenido al ${this.nombre}`);
        super.jugar();
    }
}