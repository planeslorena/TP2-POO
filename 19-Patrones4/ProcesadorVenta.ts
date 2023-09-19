import { Producto } from "./Producto";
//Interfaz Estrategia
export interface ProcesadorVenta {
    procesarVenta(productos: Producto[]): number;
}





