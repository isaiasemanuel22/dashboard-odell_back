import { MigrationInterface, QueryRunner } from "typeorm";

export class FilamentColor1741834565189 implements MigrationInterface {
    name = 'FilamentColor1741834565189'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`SET SQL_SAFE_UPDATES = 0`);
        await queryRunner.query(`UPDATE \`filament\` SET (\`colorId\`) = NULL WHERE (\`colorId\`) = ''`);
        await queryRunner.query(`ALTER TABLE \`filament\` MODIFY (\`colorId\`) VARCHAR(255) NULL;`);
        await queryRunner.query(`ALTER TABLE \`filament\` ADD CONSTRAINT \`FK_f5ee2a19cde7c6fa02bd64210a6\` FOREIGN KEY (\`colorId\`) REFERENCES \`color\`(\`id\`)`);
        await queryRunner.query(`SET SQL_SAFE_UPDATES = 1;`);
        
      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`filament\` DROP FOREIGN KEY \`FK_f5ee2a19cde7c6fa02bd64210a6\``);
    }

}
 