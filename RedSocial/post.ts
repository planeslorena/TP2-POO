export class Post {
    private texto: string;
    private meGusta: number;
    private comentarios: string[];

    constructor(texto: string) {
        this.texto = texto;
        this.meGusta = 0;
        this.comentarios = [];
    }

    public verPost():void {
        console.log(this.texto);
        console.log(`Me Gusta: ${this.meGusta}`);
        console.log('Comentarios: ');
        this.comentarios.forEach(comentario => {
            console.log(`   ${comentario}`);
            console.log('')
        });
        console.log('');
    }

    public agregarComentario(texto: string): void {
        this.comentarios.push(texto);
    }

    public sumarMeGusta(): void {
        this.meGusta++;
    }
}