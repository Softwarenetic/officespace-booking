import {MigrationInterface, QueryRunner, Table} from "typeorm"
import {WorkplaceType} from "../entity/Workplace";

export class CreateWorkplace implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "workplace"`);
    }
}
