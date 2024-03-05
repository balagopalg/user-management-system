import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddEmailToUser1709629686398 implements MigrationInterface {
  name = 'AddEmailToUser1709629686398';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`email\` varchar(100) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`email\``);
  }
}
