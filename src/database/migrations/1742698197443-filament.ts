import { MigrationInterface, QueryRunner } from "typeorm";

export class Filament1742698197443 implements MigrationInterface {
    name = 'Filament1742698197443'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`config\` (\`id\` varchar(36) NOT NULL, \`price_kwh\` int NOT NULL DEFAULT '0', \`consume_x_hour\` int NOT NULL DEFAULT '0', \`wear_machine\` int NOT NULL DEFAULT '0', \`price_replacement\` int NOT NULL DEFAULT '0', \`margin_error\` int NOT NULL DEFAULT '0', \`type\` varchar(255) NOT NULL DEFAULT '', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`config\``);
    }

}
