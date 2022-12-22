"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
const typeorm_1 = require("typeorm");
class CreateUser {
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
                    name: "surname",
                    type: "varchar",
                    length: "24",
                },
                {
                    name: "company",
                    type: "varchar",
                    length: "20",
                },
                {
                    name: "position",
                    type: "varchar",
                    length: "20",
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "30",
                },
                {
                    name: "avatar",
                    type: "text",
                },
            ]
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user");
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=CreateUser.js.map