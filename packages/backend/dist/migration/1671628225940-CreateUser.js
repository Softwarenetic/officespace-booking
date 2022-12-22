"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
class CreateUser {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "user" (
                "id" SERIAL PRIMARY KEY , 
                "name" character varying(20) NOT NULL, 
                "surname" character varying(24) NOT NULL,                 
                "company" character varying(20) NOT NULL, 
                "position" character varying(20) NOT NULL, 
                "email" character varying(30) NOT NULL, 
                "avatar" text NOT NULL
                )`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=1671628225940-CreateUser.js.map