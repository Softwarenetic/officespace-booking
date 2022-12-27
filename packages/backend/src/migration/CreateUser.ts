import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateUser implements MigrationInterface {

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
                        length: "50",
                    },
                    {
                        name: "avatar",
                        type: "text",
                    },
                ]
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")
    }
}

