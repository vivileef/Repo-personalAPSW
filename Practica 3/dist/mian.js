"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./data-source");
const usuario_1 = require("./entities/usuario");
data_source_1.AppDataSource.initialize()
    .then(async () => {
    console.log("📀 Conexión establecida con la base de datos");
    const usuarioRepo = data_source_1.AppDataSource.getRepository(usuario_1.Usuario);
    const nuevoUsuario = usuarioRepo.create({
        nombre: "Carlos",
        apellido: "Mendoza",
        email: "carlos@example.com",
        contrasena: "123456",
        tipo_usuario: "medico",
    });
    await usuarioRepo.save(nuevoUsuario);
    console.log("✅ Usuario guardado correctamente");
})
    .catch((error) => console.error("❌ Error al conectar:", error));
//# sourceMappingURL=mian.js.map