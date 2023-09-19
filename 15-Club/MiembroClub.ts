import { Persona } from "./Persona";

export abstract class MiembroClub implements Persona {
    nombre: string;
    apellido: string;
    fechaDeNacimiento: string;
    dni: number;
    tel: number;
    miembroDesde: string;

    constructor(nombre: string, apellido: string, fechaDeNacimiento: string, dni: number, tel: number, miembroDesde: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.dni = dni;
        this.tel = tel;
        this.miembroDesde = miembroDesde;
    }
}