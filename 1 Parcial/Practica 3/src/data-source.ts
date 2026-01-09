import "reflect-metadata";
import { DataSource } from "typeorm";
import { Animal } from "./entities/animal";
import { Refugio } from "./entities/refugio";
import { Especie } from "./entities/especie";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: [Animal, Refugio, Especie],
});
