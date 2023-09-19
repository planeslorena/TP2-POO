import { ProcesadorVenta } from "./ProcesadorVenta";
import { Producto } from "./Producto";

//Estrategia 1: Procesa la venta de un cliente Regular
export class ProcesadorCliRegular implements ProcesadorVenta {
  //Suma el total de los producto, porque el cliente regular no tiene descuento.
  public procesarVenta(productos: Producto[]): number {
    let totalVenta = 0;
    productos.forEach(producto => {
      totalVenta += producto.getPrecio();
    });

    return totalVenta;
  }
}