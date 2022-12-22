"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkplace = void 0;
const typeorm_1 = require("typeorm");
class CreateWorkplace {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "20",
                },
                {
                    name: "type",
                    type: "enum",
                    enum: ['TABLE', 'ROOM'],
                    enumName: 'WorkplaceType',
                    default: '"TABLE"',
                }
            ]
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "workplace"`);
    }
}
exports.CreateWorkplace = CreateWorkplace;
//# sourceMappingURL=CreateWorkplace.js.map