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

    //Funcion para publicar un post, crea un nuevo objeto de la clase Post y lo agrega al array posts del usuario
    public publicarPost(texto: string) {
        const post = new Post(texto);
        this.posts.push(post);
        console.log(`-----Nueva publicacion de ${this.nombre}-----`);
        console.log(texto);
    }

    //Funcion para comentar un post de otro usuario.
    public comentarPost(usuario: Usuario, texto: string, nroPost: number) {
        usuario.posts[nroPost - 1].agregarComentario(texto);
    }

    //Funcion para ponerle me gusta al post de otro usuario
    public darMegusta(usuario: Usuario, nroPost: number) {
        usuario.posts[nroPost - 1].sumarMeGusta();
    }

    //Funcion para ver todos los post del usuario
    public verPosts(): void {
        console.log(`-----Posteos de ${this.nombre}-----`)
        this.posts.forEach(post => {
            post.verPost();
        });
    }
}