export class Post {
    private texto: string;
    private meGusta: number;
    private comentarios: string[];

    constructor(texto: string) {
        this.texto = texto;
        this.meGusta = 0;
        this.comentarios = [];
    }

    //Funcion para ver el post con todos sus comentarios y cantidad de me gusta
    public verPost(): void {
        console.log(this.texto);
        console.log(`Me Gusta: ${this.meGusta}`);
        console.log('Comentarios: ');
        this.comentarios.forEach(comentario => {
            console.log(`   ${comentario}`);
            console.log('')
        });
        console.log('');
    }

    //Agrega comentario al post
    public agregarComentario(texto: string): void {
        this.comentarios.push(texto);
    }

    //Agregar un me gusta al post
    public sumarMeGusta(): void {
        this.meGusta++;
    }
}