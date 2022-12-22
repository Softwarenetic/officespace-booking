"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReservation1671694601026 = void 0;
class CreateReservation1671694601026 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "reservation" (
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
        await queryRunner.query(`DROP TABLE "reservation"`);
    }
}
exports.CreateReservation1671694601026 = CreateReservation1671694601026;
//# sourceMappingURL=1671694601026-CreateReservation.js.map