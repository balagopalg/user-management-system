import { MigrationInterface, QueryRunner } from 'typeorm';

export class ModuleAndUsers1708933420503 implements MigrationInterface {
  name = 'ModuleAndUsers1708933420503';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`status\` varchar(20) NULL, \`is_active\` tinyint(1) NOT NULL DEFAULT '0', \`is_admin\` tinyint(1) NOT NULL DEFAULT '0', \`created_on\` bigint NULL, \`last_updated\` bigint NULL, \`created_by\` int NOT NULL DEFAULT '0', INDEX \`Users_IDX_1\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`projects\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` varchar(250) NULL, \`status\` varchar(20) NULL, \`is_active\` tinyint(1) NOT NULL DEFAULT '0', \`created_on\` bigint NULL, \`last_updated\` bigint NULL, \`created_by\` int NOT NULL, INDEX \`Project_IDX_1\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`Project_IDX_1\` ON \`projects\``);
    await queryRunner.query(`DROP TABLE \`projects\``);
    await queryRunner.query(`DROP INDEX \`Users_IDX_1\` ON \`users\``);
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
