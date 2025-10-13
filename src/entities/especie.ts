import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Animal } from "./animal";

/*
  Entidad: Especie
  - Catálogo de especies (ej: Perro, Gato).
  - PK: id_especie (autoincremental numérico)
  - Columnas adicionales: descripcion, origen, estado, fecha_creacion (para cumplir el requisito de 4+ propiedades)
  - Relación OneToMany con Animal.
*/
@Entity({ name: "especie" })
export class Especie {
  @PrimaryGeneratedColumn({ name: "id_especie" })
  id_especie!: number;

  @Column({ unique: true })
  nombre!: string;

  // Breve descripción de la especie
  @Column({ type: "text", nullable: true })
  descripcion?: string;

  // Origen o país/comunidad asociado a la especie (opcional)
  @Column({ nullable: true })
  origen?: string;

  // Estado del registro (activo/inactivo)
  @Column({ nullable: true, default: "activo" })
  estado?: string;

  // Fecha de creación o registro del catálogo
  @Column({ type: "datetime", nullable: true })
  fecha_creacion?: Date;

  // Relación inversa: una Especie tiene muchos Animals
  @OneToMany(() => Animal, (animal) => animal.especie)
  animales?: Animal[];
}
