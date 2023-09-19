export class Cancion {
    private titulo: string;
    private autor: string;

    public constructor(titulo?: string, autor?: string) {
        if (titulo && autor) {
            this.titulo = titulo;
            this.autor = autor;
        } else {
            this.titulo = '';
            this.autor = '';
        }
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }
}