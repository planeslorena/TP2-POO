export class Serie {
    private titulo: string;
    private anioEstreno: number;
    private temporadas: number;
    private episodiosxtemporadas: number[];
    private temporadaActual: number;
    private episodiosVistos: number;
    private finalizada: boolean;

    constructor(titulo: string, anioEstreno: number, temporadas: number, episodiosxtemporadas: number[]) {
        this.titulo = titulo;
        this.anioEstreno = anioEstreno;
        this.temporadas = temporadas;
        this.episodiosxtemporadas = episodiosxtemporadas;
        this.temporadaActual = 1;
        this.episodiosVistos = 0;
        this.finalizada = false;
    }

    public verEpisodio(): void {
        //Primero chequea si la serie ya fue completada, si es asi comienza desde el primer capitulo.
        if (this.finalizada) {
            console.log('La serie ya la viste completa, empezará de nuevo desde el primer capitulo.')
            this.temporadaActual = 1;
            this.episodiosVistos = 0;
        }

        //Si los episodios vistos de la temporada actual son menores a los episodios totales de la temporada, le suma uno a episodios vistos
        if (this.episodiosVistos < this.episodiosxtemporadas[this.temporadaActual - 1]) {
            this.episodiosVistos += 1;
            //Sino chequea si la temporada que se esta viendo no es la ultima y le suma uno a temporada actual y setea episodios vistos en 1. Es decir se comienza a mirar una nueva temporada.
        } else if (this.temporadaActual < this.temporadas) {
            this.temporadaActual += 1;
            this.episodiosVistos = 1;
        }

        //Imprime en consola el numero de episodio que se esta viendo
        console.log(`Usted esta viendo el episodio ${this.episodiosVistos} de la temporada ${this.temporadaActual}`);

        //Chequea si se esta viendo el ultimo episodio de la serie, y de ser asi actualiza la variable finalizada a true.
        if (this.episodiosVistos == this.episodiosxtemporadas[this.temporadaActual - 1] && this.temporadaActual == this.temporadas) {
            this.finalizada = true;
        }
    }

    //Funcion que imprime los episodios que quedan por ver de la serie
    public episodiosxVer() {
        //Si la serie ya fue vista por completo, informa que no quedan episodios por ver
        if (this.finalizada) {
            console.log(`No te quedan episodios por ver de la serie ${this.titulo}`);
        } else {
            //calculo de los episodios que quedan por ver de la temporada actual
            let faltantesTempActual: number = this.episodiosxtemporadas[this.temporadaActual - 1] - this.episodiosVistos

            console.log(`Episodios por ver de la serie: ${this.titulo}`);
            //imprime los episodios que faltan por ver de la temporada actual si son mayores a 0
            if (faltantesTempActual) {
                console.log(`Temporada ${this.temporadaActual}: ${faltantesTempActual} episodios`);
            }

            //imprime los episodios que faltan por ver de las temporadas siguientes
            for (let i = this.temporadaActual + 1; i <= this.temporadas; i++) {
                console.log(`Temporada ${i}: ${this.episodiosxtemporadas[i - 1]} episodios`);
            }
        }
    }

    //funcion que informa si la serie fue vista por completo.
    public serieVista() {
        if (this.finalizada) {
            console.log(`Ya terminaste de ver ${this.titulo}`)
        } else {
            console.log(`Aun te quedan capitulos por ver de ${this.titulo}`)
        }
    }

    //Funcion que informa los datos de la serie.
    public consultarSerie() {
        console.log(`Serie: ${this.titulo} (${this.anioEstreno}) - ${this.temporadas} temporadas.`)
        for (let i = 0; i < this.temporadas; i++) {
            console.log(`Temporada ${i + 1}: ${this.episodiosxtemporadas[i]} episodios.`);
        }
    }
}