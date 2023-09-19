import { ProcesadorVenta } from "./ProcesadorVenta";
import { Producto } from "./Producto";

//Estrategia 3:Procesa la venta de un cliente Platino.
export class ProcesadorCliPlatino implements ProcesadorVenta {
  //A cada producto le realiza el descuento del 20%
  public procesarVenta(productos: Producto[]): number {
    let totalVenta = 0;
    productos.forEach(producto => {
      totalVenta += producto.getPrecio() * .8;
    });

    return totalVenta;
  }
}