import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { Especie } from "./especie";
import { Refugio } from "./refugio";

/*
  Entidad: Animal
  - Representa un animal registrado en el sistema.
  - PK: id_animal (autoincremental numérico)
  - Relacionado con una Especie y con un Refugio.
  - Contiene propiedades informativas como edad, estado, descripcion, fotos y estado_adopcion.
*/
@Entity({ name: "animal" })
export class Animal {
  @PrimaryGeneratedColumn({ name: "id_animal" })
  id_animal!: number;

  @Column()
  nombre!: string;

  // Relación ManyToOne: un Animal pertenece a una Especie
  @ManyToOne(() => Especie, (especie) => especie.animales, { eager: true })
  especie!: Especie;

  @Column({ nullable: true })
  edad?: string;

  @Column({ nullable: true })
  estado?: string;

  @Column({ type: "text", nullable: true })
  descripcion?: string;

  @Column({ type: "text", nullable: true })
  fotos?: string;

  @Column({ nullable: true })
  estado_adopcion?: string;

  // Relación ManyToOne: un Animal puede estar en un Refugio
  @ManyToOne(() => Refugio, (refugio) => refugio.animales, { eager: true })
  refugio?: Refugio;
}
