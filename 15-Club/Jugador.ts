import { MiembroClub } from "./MiembroClub";
import { Deporte } from "./Deporte";

export class Jugador extends MiembroClub {
    private deporte: Deporte;

    constructor(nombre: string, apellido: string, fechaDeNacimiento: string, dni: number, tel: number, miembroDesde: string, deporte: Deporte) {
        super(nombre, apellido, fechaDeNacimiento, dni, tel, miembroDesde);
        this.deporte = deporte;
    }
}

