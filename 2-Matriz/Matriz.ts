class Matriz {
    private matriz: number[][];

    //El constructor crea una matriz de acuerdo a la filas y columnas indicadas por el usuario, luego la completa con numeros aleatorios del 0 al 100
    public constructor(filas: number, columnas: number) {
        this.matriz = new Array(filas);
        for (let i = 0; i < filas; i++) {
            this.matriz[i] = new Array(columnas);
            for (let j = 0; j < columnas; j++) {
                this.matriz[i][j] = Math.round(Math.random() * 100);
            }
        }
    }

    //Funcion que retorna el valor que se encuentra en la matrix en la posición x,y
    public getValor(x: number, y: number): number {
        return this.matriz[x][y];
    }

    //Funcion que imprime la matriz con sus valores.
    public verMatriz(): void {
        console.log('-------------------MATRIZ---------------------')
        for (let i = 0; i < this.matriz.length; i++) {
            console.log(this.matriz[i].join('  '));
        }
    }

}


let mat = new Matriz(10, 15);
mat.verMatriz();
let valor = mat.getValor(2, 7);
console.log(`El valor de la posición consultada es ${valor}`);