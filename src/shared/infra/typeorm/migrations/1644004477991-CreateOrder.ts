import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateOrder1644004477991 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pedido",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "cliente_id",
            type: "int",
            isNullable: true,
          },
          {
            name: "date",
            type: "date",
            isNullable: false,
          },
          {
            name: "status",
            type: "varchar",
            length: "80",
            isNullable: false,
          },
          {
            name: "forma_pagamento",
            type: "varchar",
            length: "50",
            isNullable: false,
          },
          {
            name: "valor",
            type: "float",
            isNullable: false,
          },
          {
            name: "desconto",
            type: "float",
            isNullable: true,
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      "pedido",
      new TableForeignKey({
        columnNames: ["cliente_id"],
        referencedTableName: "clientes",
        referencedColumnNames: ["id"],
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
