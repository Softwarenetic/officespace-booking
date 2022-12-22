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
exports.Reservation = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Office_1 = require("./Office");
const Workplace_1 = require("./Workplace");
let Reservation = class Reservation {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reservation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    __metadata("design:type", String)
], Reservation.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp'),
    __metadata("design:type", String)
], Reservation.prototype, "to", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.ManyToOne)(() => User_1.default, (user) => user.id),
    __metadata("design:type", Number)
], Reservation.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.ManyToOne)(() => Workplace_1.default, (workplace) => workplace.id),
    __metadata("design:type", Number)
], Reservation.prototype, "workplace", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.ManyToOne)(() => Office_1.default, (office) => office.id),
    __metadata("design:type", Number)
], Reservation.prototype, "office", void 0);
Reservation = __decorate([
    (0, typeorm_1.Entity)()
], Reservation);
exports.Reservation = Reservation;
exports.default = Reservation;
//# sourceMappingURL=Reservation.js.map