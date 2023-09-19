import { Auto } from "./Auto";

export class RegistroAutomotor {
    private autos: Auto[];

    public constructor() {
        this.autos = [];
    }

    //Funcion para dar de alta un auto en el registro. Lo agrega al array de autos.
    public darDeAlta(auto: Auto): void {
        this.autos.push(auto);
    }

    //Funcion para buscar un auto por numero de patente. Imprime todos los datos del auto buscado.
    public consultarAuto(patente: string): void {
        this.autos.forEach((auto) => {
            if (auto.getPatente() == patente.toUpperCase()) {
                console.log('-------------------CONSULTA DE AUTOMOTOR------------------------')
                console.log(`La patente: ${patente} pertenece a un ${auto.getMarca()} - ${auto.getModelo()} del año ${auto.getAnio()} `)
            }
        })
    }

    //FUncion para eliminar un auto del registro de acuerdo a la patente. Imprime en consola la patente del auto eliminado.
    public eliminarAuto(patente: string): void {
        this.autos.forEach((auto, indice) => {
            if (auto.getPatente() == patente.toUpperCase()) {
                this.autos.splice(indice, 1)
                console.log(`El automotor de patente ${patente} ha sido elimimado del registro.`)
            }
        })
    }

    //Funcion para listar en consola todos los autos del registro.
    public listarAutos(): void {
        console.log('-----------------LISTADO DE AUTOMOTORES DEL REGISTRO---------------------')
        this.autos.forEach((auto, indice) => {
            console.log(`${indice + 1} - ${auto.getMarca()} - ${auto.getModelo()} (${auto.getAnio()}) - Patente ${auto.getPatente()}`)
        })
    }
}