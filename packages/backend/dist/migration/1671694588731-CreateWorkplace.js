"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkplace1671694588731 = void 0;
class CreateWorkplace1671694588731 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "workplace" (
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
        await queryRunner.query(`DROP TABLE "workplace"`);
    }
}
exports.CreateWorkplace1671694588731 = CreateWorkplace1671694588731;
//# sourceMappingURL=1671694588731-CreateWorkplace.js.map