import type Servicio = require("./Servicio");
import type Repuesto = require("./Repuesto");
import type Dispositivo = require("./Dispositivo");
import type Tecnico = require("./tecnico");

export interface Isoporte {
    id: number;
    fecha: Date;
    estado: string;
    servicio: Servicio.Iservicio[];
    repuesto: Repuesto.Irepuesto[];
    dispositivo: Dispositivo.Idispositivo[];
    tecnicos:Tecnico.Itecnico[];
}