import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateOrderProduct1644015934759 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pedidoProduto",
        columns: [
          {
            name: "pedido_id",
            type: "int",
            isPrimary: true,
            isNullable: false,
          },
          {
            name: "produto_id",
            type: "int",
            isPrimary: true,
            isNullable: false,
          },
          { name: "quantidade", type: "int", isNullable: false },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "pedidoProduto",
      new TableForeignKey({
        columnNames: ["pedido_id"],
        referencedTableName: "pedido",
        referencedColumnNames: ["id"],
      })
    );

    await queryRunner.createForeignKey(
      "pedidoProduto",
      new TableForeignKey({
        columnNames: ["produto_id"],
        referencedTableName: "produto",
        referencedColumnNames: ["id"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
