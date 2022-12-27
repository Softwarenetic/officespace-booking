import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateReservation1672061921578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "reservation"`);
    }
}
