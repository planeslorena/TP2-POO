export class Auto {
    private marca: string;
    private modelo:string;
    private patente:string;
    private anio: number;

    public constructor (marca: string, modelo:string, patente:string, anio:number) {
        this.modelo = modelo;
        this.marca = marca;
        this.patente = patente;
        this.anio = anio;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getMarca():string {
        return this.marca;
    }

    public getPatente():string {
        return this.patente;
    }

    public getAnio() :number {
        return this.anio;
    }
}
