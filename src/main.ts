import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { RefugioService } from "./services/refugio.service";
import { EspecieService } from "./services/especie.service";
import { AnimalService } from "./services/animal.service";

/**
 * Script principal (seed + pruebas CRUD)
 * - Inicializa la conexión con TypeORM (AppDataSource.initialize()).
 * - Crea datos semilla (Refugio, Especie, Animal) si no existen.
 * - Ejecuta operaciones CRUD de ejemplo para validar la implementación.
 */
async function run() {
  await AppDataSource.initialize();
  console.log("📀 Conexión establecida");

  const refugioSvc = new RefugioService();
  const especieSvc = new EspecieService();
  const animalSvc = new AnimalService();

  // Seed: crear refugio y especie
  const refugio = await refugioSvc.create({
    nombre: "Refugio Manta",
    direccion: "Calle Universitaria",
    telefono: "333 445",
    descripcion: "Refugio de animales en Manta",
  });

  // Reusar especie si ya existe (evitar UNIQUE constraint)
  let especie = await especieSvc.findByName("Gato");
  if (!especie) {
    especie = await especieSvc.create({ nombre: "Gato" });
  }

  // Crear animal (relacionado a especie y refugio)
  const animal = await animalSvc.create({
    nombre: "Michi",
    especie: especie,
    edad: "2 años",
    estado: "sano",
    descripcion: "Muy cariñoso",
    estado_adopcion: "disponible",
    refugio: refugio,
  });

  console.log("Seed completado:", { refugio, especie, animal });

  // Probar CRUD: listar, buscar, actualizar y eliminar
  const animales = await animalSvc.findAll();
  console.log("Animales totales:", animales.length);

  const found = await animalSvc.findOne(animal.id_animal as number);
  console.log("FindOne:", found?.nombre);

  await animalSvc.update(animal.id_animal as number, { estado: "en adopcion" });
  console.log("Update realizado");

  // Cleanup demo: eliminar animal
  await animalSvc.remove(animal.id_animal as number);
  console.log("Remove realizado");

  process.exit(0);
}

run().catch((e) => {
  console.error("Error en ejecución:", e);
  process.exit(1);
});
