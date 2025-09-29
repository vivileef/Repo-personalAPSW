import { DispositivoService } from "./services/dispositivo";

const dispositivoService = new DispositivoService();

const dispositivo1 = dispositivoService.crear();
console.log("Dispositivo creado:", dispositivo1);
const dispositivo2 = dispositivoService.consultar();
console.log("Dispositivos existentes:", dispositivo2);
let dispositivo3 = dispositivoService.modificar(1, { marca: "Iphone" });
const dispositivo4 = dispositivoService.modificar(1, {  tipo: "mack" });
console.log("Dispositivo modificado:", dispositivo3);
const dispositivo5 = dispositivoService.eliminar(1);
console.log("Dispositivo eliminado:", dispositivo5);