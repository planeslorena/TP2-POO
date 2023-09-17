class Cafetera {
    private capacidadMax: number;
    private cantidadActual: number;

    public constructor(capacidadMax?: number, cantidadActual?: number) {
        if (capacidadMax && cantidadActual && cantidadActual > capacidadMax) {
            this.capacidadMax = capacidadMax;
            this.cantidadActual = capacidadMax;
        } else if (capacidadMax && cantidadActual && cantidadActual < capacidadMax) {
            this.capacidadMax = capacidadMax;
            this.cantidadActual = cantidadActual;
        } else if (capacidadMax && !cantidadActual) {
            this.capacidadMax = capacidadMax;
            this.cantidadActual = capacidadMax;
        } else {
            this.capacidadMax = 1000;
            this.cantidadActual = 0;
        }
    }

    public llenarCafetera(): void {
        this.cantidadActual = this.capacidadMax;
        console.log(`Se lleno la cafetera, tiene ${this.capacidadMax} cc de cafe para disfrutar!`);
    }

    public servirTaza(capacTaza: number): void {
        if (this.cantidadActual == 0) {
            console.log(`La cafetera esta vacia, por favor llenela.`);
        } else if (this.cantidadActual <= capacTaza) {
            console.log(`Se sirvieron ${this.cantidadActual} cc de cafe. La cafetera quedo vacia, por favor llenela.`);
            this.cantidadActual = 0;
        } else {
            this.cantidadActual -= capacTaza;
            console.log(`Se sirvieron ${capacTaza} cc de cafe.`);
        }
    }

    public vaciarCafetera(): void {
        this.cantidadActual = 0;
        console.log(`Se vacio la cafetera.`);
    }

    public agregarCafe(cantidad: number): void {
        const nuevaCant: number = this.cantidadActual + cantidad;
        if (this.cantidadActual == this.capacidadMax){
            console.log(`La cafetera alcanzo la capacidad maxima, no puede agregar mas cafe.`)
        } else if (this.capacidadMax < nuevaCant) {
            this.cantidadActual = this.capacidadMax;
            console.log(`Se agrego cafe hasta la capacidad maxima.`);
        } else {
            this.cantidadActual = nuevaCant;
            console.log(`La cantidad actual de cafe es ${this.cantidadActual}`);
        }
    }
}

const cafetera1 = new Cafetera();
console.log(cafetera1)
cafetera1.llenarCafetera();
cafetera1.agregarCafe(200);
cafetera1.servirTaza(250);
cafetera1.vaciarCafetera();
console.log(cafetera1)


const cafetera2 = new Cafetera(1000);
console.log(cafetera2)
cafetera2.vaciarCafetera();
cafetera2.servirTaza(250);
console.log(cafetera2)


const cafetera3 = new Cafetera(1000,1500);
console.log(cafetera3)
cafetera3.vaciarCafetera();
cafetera3.agregarCafe(1150);
cafetera3.servirTaza(200);
console.log(cafetera3)

const cafetera4 = new Cafetera(1000,700);
console.log(cafetera4)


