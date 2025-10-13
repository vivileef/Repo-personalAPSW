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
exports.Medico = void 0;
const typeorm_1 = require("typeorm");
const usuario_1 = require("./usuario");
let Medico = class Medico {
    id_medico;
    numero_licencia;
    institucion;
    ubicacion_consultorio;
    // Relación con usuario
    usuario;
};
exports.Medico = Medico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Medico.prototype, "id_medico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "numero_licencia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "institucion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "ubicacion_consultorio", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => usuario_1.Usuario, (usuario) => usuario.medico),
    (0, typeorm_1.JoinColumn)({ name: "id_usuario" }),
    __metadata("design:type", usuario_1.Usuario)
], Medico.prototype, "usuario", void 0);
exports.Medico = Medico = __decorate([
    (0, typeorm_1.Entity)()
], Medico);
//# sourceMappingURL=medico.js.map