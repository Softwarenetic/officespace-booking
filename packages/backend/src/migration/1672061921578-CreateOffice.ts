import {MigrationInterface, QueryRunner, Table} from "typeorm"
import {PostRefactoring1672061921578} from "../../path-to-migrations-dir/1672061921578-PostRefactoring";

export class CreateOffice1672061921578 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            }),
            true,
        )

    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("office")
    }
}
