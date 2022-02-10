import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Categoria1642702224349 implements MigrationInterface {
  name = "Categoria1642702224349";

  public async up(queryRunner: QueryRunner): Promise<void> {
    /*
        
        await queryRunner.query(`DROP INDEX \`UQ_fd1214820b9f05720b26a917630\` ON \`clientes\``);
        await queryRunner.query(`ALTER TABLE \`clientes\` DROP COLUMN \`cpf\``);
        await queryRunner.query(`ALTER TABLE \`clientes\` ADD \`cpf\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`clientes\` DROP COLUMN \`telefone\``);
        await queryRunner.query(`ALTER TABLE \`clientes\` ADD \`telefone\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`clientes\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`clientes\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`clientes\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`clientes\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
      */
    await queryRunner.createTable(
      new Table({
        name: "categoria",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "descricao",
            type: "varchar",
            isNullable: false,
            length: "1000",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    /*
        await queryRunner.query(`ALTER TABLE \`clientes\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`clientes\` ADD \`updated_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`clientes\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`clientes\` ADD \`created_at\` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`clientes\` DROP COLUMN \`telefone\``);
        await queryRunner.query(`ALTER TABLE \`clientes\` ADD \`telefone\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`clientes\` DROP COLUMN \`cpf\``);
        await queryRunner.query(`ALTER TABLE \`clientes\` ADD \`cpf\` varchar(20) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`UQ_fd1214820b9f05720b26a917630\` ON \`clientes\` (\`cpf\`)`);
     */
  }
}
