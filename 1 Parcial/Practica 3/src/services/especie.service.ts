import { AppDataSource } from "../data-source";
import { Especie } from "../entities/especie";

/**
 * Servicio: EspecieService
 * - CRUD y utilidades para la entidad Especie.
 */
export class EspecieService {
  private repo = AppDataSource.getRepository(Especie);

  async create(data: Partial<Especie>): Promise<Especie> {
    const ent = this.repo.create(data as any);
    return this.repo.save(ent as any);
  }

  async findAll(): Promise<Especie[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Especie | null> {
    return this.repo.findOneBy({ id_especie: id } as any);
  }

  async findByName(nombre: string): Promise<Especie | null> {
    return this.repo.findOneBy({ nombre } as any);
  }

  async update(id: number, data: Partial<Especie>): Promise<Especie | null> {
    await this.repo.update({ id_especie: id } as any, data as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete({ id_especie: id } as any);
  }
}
