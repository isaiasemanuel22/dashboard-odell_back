import { MigrationInterface, QueryRunner } from "typeorm";

export class NuevaTabla1741635804337 implements MigrationInterface {
    name = 'NuevaTabla1741635804337'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`color\` ADD \`rgb\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`color\` DROP COLUMN \`rgb\``);
    }

}
