import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Animal } from "./animal";

/*
  Entidad: Refugio
  - Representa un refugio/centro que aloja animales.
  - PK: id_refugio (autoincremental numérico)
  - Contiene datos de contacto y descripción.
  - Relación OneToMany con Animal (un refugio tiene muchos animales).
*/
@Entity({ name: "refugio" })
export class Refugio {
  @PrimaryGeneratedColumn({ name: "id_refugio" })
  id_refugio!: number;

  @Column()
  nombre!: string;

  @Column({ nullable: true })
  direccion?: string;

  @Column({ nullable: true })
  telefono?: string;

  @Column({ type: "text", nullable: true })
  descripcion?: string;

  // Relación inversa: un Refugio contiene muchos Animals
  @OneToMany(() => Animal, (animal) => animal.refugio)
  animales?: Animal[];
}
