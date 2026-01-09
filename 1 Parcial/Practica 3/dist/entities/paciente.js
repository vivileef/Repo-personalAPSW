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
exports.Paciente = void 0;
const typeorm_1 = require("typeorm");
const usuario_1 = require("./usuario");
let Paciente = class Paciente {
    id_paciente;
    nombre;
    fecha_nacimiento;
    cedula;
    direccion;
    telefono;
    // Relación con usuario
    usuario;
};
exports.Paciente = Paciente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Paciente.prototype, "id_paciente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], Paciente.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Paciente.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_1.Usuario, (usuario) => usuario.paciente),
    (0, typeorm_1.JoinColumn)({ name: "id_usuario" }),
    __metadata("design:type", usuario_1.Usuario)
], Paciente.prototype, "usuario", void 0);
exports.Paciente = Paciente = __decorate([
    (0, typeorm_1.Entity)()
], Paciente);
//# sourceMappingURL=paciente.js.map