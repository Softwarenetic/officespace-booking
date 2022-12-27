import {MigrationInterface, QueryRunner, Table} from "typeorm"
import {WorkplaceType} from "../entity/Workplace";

export class CreateWorkplace1672061921578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "workplace",
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
                    }
                ]
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "workplace"`);
    }
}