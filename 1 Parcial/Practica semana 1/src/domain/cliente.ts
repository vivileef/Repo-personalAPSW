import type Dispositivo = require("./Dispositivo");

export interface Icliente {
    id: number;
    nombre: string;
    apellido: string;
    dispositivos: Dispositivo.Idispositivo[];
}