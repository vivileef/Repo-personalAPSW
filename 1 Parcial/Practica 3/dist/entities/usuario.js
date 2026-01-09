"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const medico_1 = require("./medico");
const paciente_1 = require("./paciente");
let Usuario = class Usuario {
    id_usuario;
    nombre;
    apellido;
    email;
    contrasena;
    tipo_usuario;
    fecha_registro;
    estado;
    // Relaciones
    medico;
    paciente;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Usuario.prototype, "tipo_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Usuario.prototype, "fecha_registro", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], Usuario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medico_1.Medico, (medico) => medico.usuario),
    __metadata("design:type", medico_1.Medico)
], Usuario.prototype, "medico", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => paciente_1.Paciente, (paciente) => paciente.usuario),
    __metadata("design:type", paciente_1.Paciente)
], Usuario.prototype, "paciente", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)()
], Usuario);
//# sourceMappingURL=usuario.js.map