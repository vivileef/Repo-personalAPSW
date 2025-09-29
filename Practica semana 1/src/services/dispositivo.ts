import { Idispositivo } from "../domain/Dispositivo";
const dispositivos: Idispositivo[] = [];
export class DispositivoService {

    constructor() { }

    crear() {
        const dispositivo: Idispositivo = {
            id: 1,
            tipo: "celular",
            marca: "Samsung",
            clienteId: 1,
            cliente: { id: 1, nombre: "Juan", apellido: "Perez", dispositivos: [] },
        }
        dispositivos.push(dispositivo);
        return dispositivo;
    }
    modificar( id: number, cambios: Partial<Idispositivo> ) {
        const dispositivo = dispositivos.find(d => d.id == id);
        if (dispositivo) {
            Object.assign(dispositivo, cambios);
        } else {
            throw new Error("Dispositivo no encontrado");
        }
        return dispositivo;
    }
    eliminar(id: number) {
        const index = dispositivos.findIndex(d => d.id === id);
        if (index !== -1) {
            dispositivos.splice(index, 1);
        }
    }
    consultar(){
        return dispositivos;
    }
}
//hola 