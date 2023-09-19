import { ProcesadorVenta } from "./ProcesadorVenta";
import { Producto } from "./Producto";

//Estrategia2: Procesa la venta a un cliente Gold

export class ProcesadorCliGold implements ProcesadorVenta {
  //Le aplica el descuento solo a los productos mayores a $10000 y suma el total de la venta
  public procesarVenta(productos: Producto[]): number {
    let totalVenta = 0;
    productos.forEach(producto => {
      if (producto.getPrecio() > 10000) {
        totalVenta += producto.getPrecio() * .8;
      } else {
        totalVenta += producto.getPrecio();
      }
    });
    return totalVenta;
  }
}