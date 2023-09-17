var Cafetera = /** @class */ (function () {
    function Cafetera(capacidadMax, cantidadActual) {
        if (capacidadMax && cantidadActual && cantidadActual > capacidadMax) {
            this.capacidadMax = capacidadMax;
            this.cantidadActual = capacidadMax;
        }
        else if (capacidadMax && cantidadActual && cantidadActual < capacidadMax) {
            this.capacidadMax = capacidadMax;
            this.cantidadActual = cantidadActual;
        }
        else if (capacidadMax && !cantidadActual) {
            this.capacidadMax = capacidadMax;
            this.cantidadActual = capacidadMax;
        }
        else {
            this.capacidadMax = 1000;
            this.cantidadActual = 0;
        }
    }
    Cafetera.prototype.llenarCafetera = function () {
        this.cantidadActual = this.capacidadMax;
        console.log("Se lleno la cafetera, tiene ".concat(this.capacidadMax, " cc de cafe para disfrutar!"));
    };
    Cafetera.prototype.servirTaza = function (capacTaza) {
        if (this.cantidadActual == 0) {
            console.log("La cafetera esta vacia, por favor llenela.");
        }
        else if (this.cantidadActual <= capacTaza) {
            console.log("Se sirvieron ".concat(this.cantidadActual, " cc de cafe. La cafetera quedo vacia, por favor llenela."));
            this.cantidadActual = 0;
        }
        else {
            this.cantidadActual -= capacTaza;
            console.log("Se sirvieron ".concat(capacTaza, " cc de cafe."));
        }
    };
    Cafetera.prototype.vaciarCafetera = function () {
        this.cantidadActual = 0;
        console.log("Se vacio la cafetera.");
    };
    Cafetera.prototype.agregarCafe = function (cantidad) {
        var nuevaCant = this.cantidadActual + cantidad;
        if (this.cantidadActual == this.capacidadMax) {
            console.log("La cafetera alcanzo la capacidad maxima, no puede agregar cafe.");
        }
        if (this.capacidadMax < nuevaCant) {
            this.cantidadActual = this.capacidadMax;
            console.log("Se agrego cafe hasta la capacidad maxima.");
        }
        else {
            this.cantidadActual = nuevaCant;
            console.log("La cantidad actual de cafe es ".concat(this.cantidadActual));
        }
    };
    return Cafetera;
}());
var cafetera1 = new Cafetera();
console.log(cafetera1);
cafetera1.llenarCafetera();
cafetera1.agregarCafe(200);
cafetera1.servirTaza(250);
cafetera1.vaciarCafetera();
console.log(cafetera1);
var cafetera2 = new Cafetera(1000);
console.log(cafetera2);
cafetera2.vaciarCafetera();
cafetera2.servirTaza(250);
console.log(cafetera2);
var cafetera3 = new Cafetera(1000, 1500);
console.log(cafetera3);
cafetera3.vaciarCafetera();
cafetera3.agregarCafe(1150);
cafetera3.servirTaza(200);
console.log(cafetera3);
var cafetera4 = new Cafetera(1000, 700);
console.log(cafetera4);
