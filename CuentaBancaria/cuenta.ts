export class Cuenta {
    private titular: string;
    private nroCuenta: number;
    private saldo: number;

    constructor(titular: string, nroCuenta: number, saldo?:number) {
        this.titular = titular;
        this.nroCuenta = nroCuenta;
        if (saldo) {
            this.saldo = saldo;
        } else {
            this.saldo = 0;
        }
    }

    public getTitular(): string {
        return this.titular;
    }

    public setTitular(titular: string): void {
        this.titular = titular;
    }

    public getNroCuenta(): number {
        return this.nroCuenta;
    }

    public setNroCuenta(nroCuenta: number): void {
        this.nroCuenta = nroCuenta;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public mostrarCuenta():void {
        console.log(`Cuenta n° ${this.nroCuenta} perteneciente a ${this.titular} con un saldo de $${this.saldo}`);
    }

    public ingresar(monto: number):void {
        this.saldo += monto;
        console.log(`Se realizó un deposito de $${monto}, su saldo actual es $${this.saldo}`);
    }

    public retirar(monto:number):void {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            console.log(`Se extrajeron $${monto}, su saldo actual es de $${this.saldo}`);
        } else {
            console.log(`Saldo insuficiente.`);
        }
    }
}