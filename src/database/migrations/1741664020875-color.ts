import { MigrationInterface, QueryRunner } from "typeorm";

export class Color1741664020875 implements MigrationInterface {
    name = 'Color1741664020875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`color\` DROP COLUMN \`rgb\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`color\` ADD \`rgb\` varchar(255) NOT NULL`);
    }

}
