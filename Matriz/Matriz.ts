class Matriz {
    private matriz: number [][];
  
    public constructor(filas: number,columnas:number) {
        this.matriz = new Array (filas);
        for (let i = 0; i< filas; i++) {
            this.matriz[i] = new Array (columnas);
            for (let j= 0; j< columnas; j++) {
                this.matriz[i][j] = Math.round(Math.random() * 100);
            }
        }
    }
  
    public getValor(x: number, y: number): number {
      return this.matriz[x][y];
    }

    public verMatriz(): void {
        console.log('-------------------MATRIZ---------------------')
        for (let i = 0; i < this.matriz.length; i++) {
            console.log(this.matriz[i].join('  '));
        }
    }

}
  

let mat = new Matriz(10,15);
mat.verMatriz();
let valor = mat.getValor(2, 7);
console.log(`El valor de la posición consultada es ${valor}`);