import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";
import { idText } from "typescript";

export class CreateProducts1643137233342 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "produto",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },

          {
            name: "nome",
            type: "varchar",
            length: "500",
            isNullable: false,
          },
          {
            name: "preco",
            type: "float",
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: "quantidade",
            type: "int",
            isNullable: false,
          },
          {
            name: "categoria_id",
            type: "int",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "produto",
      new TableForeignKey({
        columnNames: ["categoria_id"],

        referencedTableName: "categoria",

        referencedColumnNames: ["id"],

        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produto");
  }
}
