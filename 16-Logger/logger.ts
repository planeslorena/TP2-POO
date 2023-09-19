class Logger {
    private static me?: Logger;
    private contador: number;

    private constructor() {
        this.contador = 0;
    }

    public static getInstance() {
        if (this.me) {
            return this.me;
        }
        this.me = new Logger();
        return this.me;
    }

    public accederSistema() {
        this.contador++;
        console.log(`Cantidad de accesos al sistema: ${this.contador}`);
    }
}


//Ejecucion
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();