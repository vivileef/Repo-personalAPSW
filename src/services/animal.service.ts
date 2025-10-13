import { AppDataSource } from "../data-source";
import { Animal } from "../entities/animal";

/**
 * Servicio: AnimalService
 * - Encapsula la lógica CRUD para la entidad Animal.
 * - Usa el AppDataSource para acceder al repositorio.
 */
export class AnimalService {
  private repo = AppDataSource.getRepository(Animal);

  async create(data: Partial<Animal>): Promise<Animal> {
    const ent = this.repo.create(data as any);
    return this.repo.save(ent as any);
  }

  async findAll(): Promise<Animal[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Animal | null> {
    return this.repo.findOneBy({ id_animal: id } as any);
  }

  async update(id: number, data: Partial<Animal>): Promise<Animal | null> {
    await this.repo.update({ id_animal: id } as any, data as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete({ id_animal: id } as any);
  }
}
