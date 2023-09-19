var Matriz = /** @class */ (function () {
    function Matriz(filas, columnas) {
        this.matriz = new Array(filas);
        for (var i = 0; i < filas; i++) {
            this.matriz[i] = new Array(columnas);
            for (var j = 0; j < columnas; j++) {
                this.matriz[i][j] = Math.round(Math.random() * 100);
            }
        }
    }
    Matriz.prototype.getValor = function (x, y) {
        return this.matriz[x][y];
    };
    Matriz.prototype.verMatriz = function () {
        console.log('-------------------MATRIZ---------------------');
        for (var i = 0; i < this.matriz.length; i++) {
            console.log(this.matriz[i].join('  '));
        }
    };
    return Matriz;
}());
var mat = new Matriz(10, 15);
mat.verMatriz();
var valor = mat.getValor(2, 7);
console.log("El valor de la posici\u00F3n consultada es ".concat(valor));
