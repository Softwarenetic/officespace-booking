"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReservation = void 0;
const typeorm_1 = require("typeorm");
class CreateReservation {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "reservation",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "from",
                    type: "varchar",
                    length: "20",
                },
                {
                    name: "to",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "to",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "user",
                    type: "int",
                },
                {
                    name: "workplace",
                    type: "int",
                },
                {
                    name: "office",
                    type: "int",
                },
            ]
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "reservation"`);
    }
}
exports.CreateReservation = CreateReservation;
//# sourceMappingURL=CreateReservation.js.map