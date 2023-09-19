var Logger = /** @class */ (function () {
    function Logger() {
        this.contador = 0;
    }
    Logger.getInstance = function () {
        if (this.me) {
            return this.me;
        }
        this.me = new Logger();
        return this.me;
    };
    Logger.prototype.accederSistema = function () {
        this.contador++;
        console.log("Cantidad de accesos al sistema: ".concat(this.contador));
    };
    return Logger;
}());
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
Logger.getInstance().accederSistema();
