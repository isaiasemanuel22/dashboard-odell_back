import { MigrationInterface, QueryRunner } from "typeorm";

export class Color1741663713567 implements MigrationInterface {
    name = 'Color1741663713567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`color\` DROP COLUMN \`rgb\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`color\` ADD \`rgb\` varchar(255) NOT NULL`);
    }

}
