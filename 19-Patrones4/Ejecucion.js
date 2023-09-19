"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("./Cliente");
var Producto_1 = require("./Producto");
var Venta_1 = require("./Venta");
//Defino diferentes clientes y productos para efectuar las ventas.
var cliente1 = new Cliente_1.Cliente('Ramon Aguirre', 'Regular');
var cliente2 = new Cliente_1.Cliente('Juan Perez', 'Gold');
var cliente3 = new Cliente_1.Cliente('Claudia Gonzalez', 'Platino');
var cartera = new Producto_1.Producto('Cartera', 15000);
var billetera = new Producto_1.Producto('Billetera', 5000);
var botas = new Producto_1.Producto('Botas', 25000);
var cinto = new Producto_1.Producto('Cinto', 7000);
var bufanda = new Producto_1.Producto('Bufanda', 5500);
var mochila = new Producto_1.Producto('Mochila', 20000);
var zapatillas = new Producto_1.Producto('Zapatillas', 30000);
//Venta cliente regular: 15000+5000+30000 = 50000
var venta1 = new Venta_1.Venta(cliente1, [cartera, billetera, zapatillas]);
console.log("La venta a ".concat(venta1.getCliente(), " fue por un total de $").concat(venta1.calcularImporteVenta()));
console.log('');
//Venta cliente gold: 25000*0.8+7000+5500 = 32500
var venta2 = new Venta_1.Venta(cliente2, [botas, cinto, bufanda]);
console.log("La venta a ".concat(venta2.getCliente(), " fue por un total de $").concat(venta2.calcularImporteVenta()));
console.log('');
//Venta cliente platino: 20000*0.8+15000*0.8+7000*0.8 = 33600
var venta3 = new Venta_1.Venta(cliente3, [mochila, cartera, cinto]);
console.log("La venta a ".concat(venta3.getCliente(), " fue por un total de $").concat(venta3.calcularImporteVenta()));
console.log('');
//Venta cliente gold: 25000*0.8+7000+30000*0.8 = 51000
var venta4 = new Venta_1.Venta(cliente2, [botas, cinto, zapatillas]);
console.log("La venta a ".concat(venta4.getCliente(), " fue por un total de $").concat(venta4.calcularImporteVenta()));
console.log('');
//Venta cliente gold: 25000*0.8+7000*0.8+30000*0.8 = 49600
var venta5 = new Venta_1.Venta(cliente3, [botas, cinto, zapatillas]);
console.log("La venta a ".concat(venta5.getCliente(), " fue por un total de $").concat(venta5.calcularImporteVenta()));
console.log('');
