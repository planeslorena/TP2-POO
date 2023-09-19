import { Cliente } from "./Cliente";
import { ProcesadorVenta } from "./ProcesadorVenta";
import { Producto } from "./Producto";
import { ProcesadorCliGold } from "./ProcesadorCliGold";
import { ProcesadorCliRegular } from "./ProcesadorCliRegular";
import { ProcesadorCliPlatino } from "./ProcesadorCliPlatino";

//Contexto: defino la estrategia sugun cada venta venta
export class Venta {
    private cliente: Cliente;
    private productos: Producto[];
    private procesador: ProcesadorVenta;

    constructor(cliente: Cliente, productos: Producto[]) {
        this.cliente = cliente;
        this.productos = productos;

        //Defino la estrategia segun el tipo de cliente.
        if (this.cliente.getTipo() == 'regular') {
            this.procesador = new ProcesadorCliRegular();
        } else if (this.cliente.getTipo() == 'gold') {
            this.procesador = new ProcesadorCliGold();
        } else {
            this.procesador = new ProcesadorCliPlatino();
        }
    }

    public getCliente(): string {
        return `Cliente: ${this.cliente.getNombre()} - Tipo: ${this.cliente.getTipo()}`
    }

    //Calculo la venta de acuerdo a la estrategia elegida
    public calcularImporteVenta(): number {
        return this.procesador.procesarVenta(this.productos);
    }
}