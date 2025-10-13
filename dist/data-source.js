"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const usuario_1 = require("./entities/usuario");
const medico_1 = require("./entities/medico");
const paciente_1 = require("./entities/paciente");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: [usuario_1.Usuario, medico_1.Medico, paciente_1.Paciente],
});
//# sourceMappingURL=data-source.js.map