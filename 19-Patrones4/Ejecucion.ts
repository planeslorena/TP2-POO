import { Cliente } from "./Cliente";
import { Producto } from "./Producto";
import { Venta } from "./Venta";

//Defino diferentes clientes y productos para efectuar las ventas.
const cliente1 = new Cliente('Ramon Aguirre', 'Regular');
const cliente2 = new Cliente('Juan Perez', 'Gold');
const cliente3 = new Cliente('Claudia Gonzalez', 'Platino');

const cartera = new Producto('Cartera', 15000);
const billetera = new Producto('Billetera', 5000);
const botas = new Producto('Botas', 25000);
const cinto = new Producto('Cinto', 7000);
const bufanda = new Producto('Bufanda', 5500);
const mochila = new Producto('Mochila', 20000);
const zapatillas = new Producto('Zapatillas', 30000);

//Venta cliente regular: 15000+5000+30000 = 50000
const venta1 = new Venta(cliente1, [cartera, billetera, zapatillas]);
console.log(`La venta a ${venta1.getCliente()} fue por un total de $${venta1.calcularImporteVenta()}`);
console.log('');

//Venta cliente gold: 25000*0.8+7000+5500 = 32500
const venta2 = new Venta(cliente2, [botas, cinto, bufanda]);
console.log(`La venta a ${venta2.getCliente()} fue por un total de $${venta2.calcularImporteVenta()}`);
console.log('');

//Venta cliente platino: 20000*0.8+15000*0.8+7000*0.8 = 33600
const venta3 = new Venta(cliente3, [mochila, cartera, cinto]);
console.log(`La venta a ${venta3.getCliente()} fue por un total de $${venta3.calcularImporteVenta()}`);
console.log('');

//Venta cliente gold: 25000*0.8+7000+30000*0.8 = 51000
const venta4 = new Venta(cliente2, [botas, cinto, zapatillas]);
console.log(`La venta a ${venta4.getCliente()} fue por un total de $${venta4.calcularImporteVenta()}`);
console.log('');

//Venta cliente gold: 25000*0.8+7000*0.8+30000*0.8 = 49600
const venta5 = new Venta(cliente3, [botas, cinto, zapatillas]);
console.log(`La venta a ${venta5.getCliente()} fue por un total de $${venta5.calcularImporteVenta()}`);
console.log('');