"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOffice1671694571441 = void 0;
const typeorm_1 = require("typeorm");
class CreateOffice1671694571441 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "office",
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
                    name: "address",
                    type: "varchar",
                    length: "100",
                },
                {
                    name: "floor",
                    type: "int",
                },
                {
                    name: "svg",
                    type: "text",
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("office");
    }
}
exports.CreateOffice1671694571441 = CreateOffice1671694571441;
//# sourceMappingURL=1671694571441-CreateOffice.js.map