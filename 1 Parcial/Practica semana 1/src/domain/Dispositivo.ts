import type { Icliente } from "./cliente";

export interface Idispositivo {
    id: number;
    tipo: string;
    marca: string;
    clienteId: number;
    cliente: Icliente;
}
