export class Serie {
    private titulo: string;
    private anioEstreno: number;
    private temporadas: number;
    private episodiosxtemporadas: number[];
    private temporadaActual: number;
    private episodiosVistos: number;
    private finalizada: boolean;

    constructor(titulo: string,anioEstreno: number,temporadas: number,episodiosxtemporadas: number[]) {
        this.titulo = titulo;
        this.anioEstreno = anioEstreno;
        this.temporadas = temporadas;
        this.episodiosxtemporadas = episodiosxtemporadas;
        this.temporadaActual = 1;
        this.episodiosVistos = 0;
        this.finalizada = false;
    }

    public verEpisodio(): void {
        if (this.finalizada) {
            console.log('La serie ya la viste completa, empezará de nuevo desde el primer capitulo.')
            this.temporadaActual = 1;
            this.episodiosVistos = 0;
        }

        if (this.episodiosVistos < this.episodiosxtemporadas[this.temporadaActual-1]) {
            this.episodiosVistos +=1;
        } else if (this.temporadaActual< this.temporadas){
            this.temporadaActual += 1;
            this.episodiosVistos = 1;
        }
        console.log(`Usted esta viendo el episodio ${this.episodiosVistos} de la temporada ${this.temporadaActual}`);

        if (this.episodiosVistos == this.episodiosxtemporadas[this.temporadaActual-1] && this.temporadaActual == this.temporadas) {
            this.finalizada = true;
        }
    }   

    public episodiosxVer() {
        
        if (this.finalizada) {
            console.log(`No te quedan episodios por ver de la serie ${this.titulo}`);
        } else {
            let faltantesTempActual: number = this.episodiosxtemporadas[this.temporadaActual-1] - this.episodiosVistos

            console.log(`Episodios por ver de la serie: ${this.titulo}`);
            if (faltantesTempActual) {
                console.log(`Temporada ${this.temporadaActual}: ${faltantesTempActual} episodios`);
            }
            
            for (let i= this.temporadaActual+1; i <= this.temporadas; i++) {
                console.log(`Temporada ${i}: ${this.episodiosxtemporadas[i-1]} episodios`);
            }
        }
    }

    public serieVista() {
        if (this.finalizada) {
            console.log(`Ya terminaste de ver ${this.titulo}`)
        } else {
            console.log(`Aun te quedan capitulos por ver de ${this.titulo}`)
        }
    }

    public consultarSerie() {
        console.log(`Serie: ${this.titulo} (${this.anioEstreno}) - ${this.temporadas} temporadas.`)
        for (let i= 0; i < this.temporadas; i++) {
            console.log(`Temporada ${i+1}: ${this.episodiosxtemporadas[i]} episodios.`);
        }
    }
}