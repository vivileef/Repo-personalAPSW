import { AppDataSource } from "../data-source";
import { Refugio } from "../entities/refugio";

/**
 * Servicio: RefugioService
 * - CRUD para la entidad Refugio.
 */
export class RefugioService {
  private repo = AppDataSource.getRepository(Refugio);

  async create(data: Partial<Refugio>): Promise<Refugio> {
    const ent = this.repo.create(data as any);
    return this.repo.save(ent as any);
  }

  async findAll(): Promise<Refugio[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<Refugio | null> {
    return this.repo.findOneBy({ id_refugio: id } as any);
  }

  async update(id: number, data: Partial<Refugio>): Promise<Refugio | null> {
    await this.repo.update({ id_refugio: id } as any, data as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete({ id_refugio: id } as any);
  }
}
