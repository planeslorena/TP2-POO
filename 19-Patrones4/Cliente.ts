export class Cliente {
    private nombre: string;
    private tipo: string;

    constructor(nombre: string, tipo: string) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getTipo(): string {
        return this.tipo.toLowerCase();
    }
}