import { Post } from "./post";

export class Usuario {
    protected nombre: string;
    protected email: string;
    protected contraseña: string;
    protected posts: Post[];

    constructor(nombre: string, email: string, contraseña: string) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.posts = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public publicarPost(texto: string) {
        const post = new Post(texto);
        this.posts.push(post);
        console.log(`-----Nueva publicacion de ${this.nombre}-----`);
        console.log(texto);
    }

    public comentarPost(usuario:Usuario, texto:string, nroPost:number) {
        usuario.posts[nroPost-1].agregarComentario(texto);
    }

    public darMegusta(usuario:Usuario, nroPost:number) {
        usuario.posts[nroPost-1].sumarMeGusta();
    }

    public verPosts():void{
        console.log(`-----Posteos de ${this.nombre}-----`)
        this.posts.forEach(post => {
            post.verPost();
        });
    }
}