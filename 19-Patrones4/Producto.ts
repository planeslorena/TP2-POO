export class Producto {
    private nombre: string;
    private precio: number;

    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    }

    public getPrecio(): number {
        return this.precio;
    }
}