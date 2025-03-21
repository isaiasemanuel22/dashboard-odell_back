import { MigrationInterface, QueryRunner } from "typeorm";

export class Filament1742524381772 implements MigrationInterface {
    name = 'Filament1742524381772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product_info\` (\`id\` varchar(36) NOT NULL, \`description\` varchar(255) NOT NULL DEFAULT '', \`colorsAvailability\` json NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`cant\` int NOT NULL, \`cost\` int NOT NULL, \`price\` int NOT NULL, \`photos\` text NULL, \`supplement\` tinyint NOT NULL DEFAULT 0, \`product\` tinyint NOT NULL DEFAULT 0, \`productInfoId\` varchar(36) NULL, \`billId\` varchar(36) NULL, UNIQUE INDEX \`REL_198c6c53cc43ba423541f95e5e\` (\`productInfoId\`), UNIQUE INDEX \`REL_026e7a3353fe68ecedc7194bda\` (\`billId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`brand_filament\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`color\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`filament\` (\`id\` varchar(36) NOT NULL, \`price\` int NOT NULL, \`kgMaterial\` int NOT NULL, \`stock\` int NOT NULL DEFAULT '0', \`brandFilamentId\` varchar(36) NULL, \`typeMaterialId\` varchar(36) NULL, \`colorId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`type_material\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bill\` (\`id\` varchar(36) NOT NULL, \`hours\` int NOT NULL, \`grams\` int NOT NULL, \`productId\` varchar(36) NULL, \`materialId\` varchar(36) NULL, UNIQUE INDEX \`REL_d4429ca373301f38e8df1363f2\` (\`productId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fixed_expense\` (\`id\` varchar(36) NOT NULL, \`priceKwh\` int NOT NULL, \`consumeRealHour\` int NOT NULL, \`machineWear\` int NOT NULL, \`spareParts\` int NOT NULL, \`marginOfError\` int NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`stock_filament\` (\`id\` varchar(36) NOT NULL, \`cant\` int NOT NULL DEFAULT '0', \`filamentId\` varchar(36) NOT NULL, \`colorId\` varchar(36) NOT NULL, UNIQUE INDEX \`REL_4d6282d6498e9ee0fe66a225e3\` (\`filamentId\`), UNIQUE INDEX \`REL_cf70c1ac7c2d6d42e04d3b0fe8\` (\`colorId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_products_product\` (\`productId_1\` varchar(36) NOT NULL, \`productId_2\` varchar(36) NOT NULL, INDEX \`IDX_a39ed8c5f30cc0960a4029ef85\` (\`productId_1\`), INDEX \`IDX_8c2aff25129aff2666947d0d26\` (\`productId_2\`), PRIMARY KEY (\`productId_1\`, \`productId_2\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_198c6c53cc43ba423541f95e5ea\` FOREIGN KEY (\`productInfoId\`) REFERENCES \`product_info\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_026e7a3353fe68ecedc7194bdaa\` FOREIGN KEY (\`billId\`) REFERENCES \`bill\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`filament\` ADD CONSTRAINT \`FK_0c8ab73f7b2408435d099b784e1\` FOREIGN KEY (\`brandFilamentId\`) REFERENCES \`brand_filament\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`filament\` ADD CONSTRAINT \`FK_4d9badbf3e48a6f5fe8ff373acc\` FOREIGN KEY (\`typeMaterialId\`) REFERENCES \`type_material\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`filament\` ADD CONSTRAINT \`FK_f5ee2a19cde7c6fa02bd64210a6\` FOREIGN KEY (\`colorId\`) REFERENCES \`color\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bill\` ADD CONSTRAINT \`FK_d4429ca373301f38e8df1363f27\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bill\` ADD CONSTRAINT \`FK_df25d1d82c1eb530e247125e1ca\` FOREIGN KEY (\`materialId\`) REFERENCES \`type_material\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stock_filament\` ADD CONSTRAINT \`FK_4d6282d6498e9ee0fe66a225e30\` FOREIGN KEY (\`filamentId\`) REFERENCES \`filament\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stock_filament\` ADD CONSTRAINT \`FK_cf70c1ac7c2d6d42e04d3b0fe83\` FOREIGN KEY (\`colorId\`) REFERENCES \`color\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_products_product\` ADD CONSTRAINT \`FK_a39ed8c5f30cc0960a4029ef852\` FOREIGN KEY (\`productId_1\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`product_products_product\` ADD CONSTRAINT \`FK_8c2aff25129aff2666947d0d268\` FOREIGN KEY (\`productId_2\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product_products_product\` DROP FOREIGN KEY \`FK_8c2aff25129aff2666947d0d268\``);
        await queryRunner.query(`ALTER TABLE \`product_products_product\` DROP FOREIGN KEY \`FK_a39ed8c5f30cc0960a4029ef852\``);
        await queryRunner.query(`ALTER TABLE \`stock_filament\` DROP FOREIGN KEY \`FK_cf70c1ac7c2d6d42e04d3b0fe83\``);
        await queryRunner.query(`ALTER TABLE \`stock_filament\` DROP FOREIGN KEY \`FK_4d6282d6498e9ee0fe66a225e30\``);
        await queryRunner.query(`ALTER TABLE \`bill\` DROP FOREIGN KEY \`FK_df25d1d82c1eb530e247125e1ca\``);
        await queryRunner.query(`ALTER TABLE \`bill\` DROP FOREIGN KEY \`FK_d4429ca373301f38e8df1363f27\``);
        await queryRunner.query(`ALTER TABLE \`filament\` DROP FOREIGN KEY \`FK_f5ee2a19cde7c6fa02bd64210a6\``);
        await queryRunner.query(`ALTER TABLE \`filament\` DROP FOREIGN KEY \`FK_4d9badbf3e48a6f5fe8ff373acc\``);
        await queryRunner.query(`ALTER TABLE \`filament\` DROP FOREIGN KEY \`FK_0c8ab73f7b2408435d099b784e1\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_026e7a3353fe68ecedc7194bdaa\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_198c6c53cc43ba423541f95e5ea\``);
        await queryRunner.query(`DROP INDEX \`IDX_8c2aff25129aff2666947d0d26\` ON \`product_products_product\``);
        await queryRunner.query(`DROP INDEX \`IDX_a39ed8c5f30cc0960a4029ef85\` ON \`product_products_product\``);
        await queryRunner.query(`DROP TABLE \`product_products_product\``);
        await queryRunner.query(`DROP INDEX \`REL_cf70c1ac7c2d6d42e04d3b0fe8\` ON \`stock_filament\``);
        await queryRunner.query(`DROP INDEX \`REL_4d6282d6498e9ee0fe66a225e3\` ON \`stock_filament\``);
        await queryRunner.query(`DROP TABLE \`stock_filament\``);
        await queryRunner.query(`DROP TABLE \`fixed_expense\``);
        await queryRunner.query(`DROP INDEX \`REL_d4429ca373301f38e8df1363f2\` ON \`bill\``);
        await queryRunner.query(`DROP TABLE \`bill\``);
        await queryRunner.query(`DROP TABLE \`type_material\``);
        await queryRunner.query(`DROP TABLE \`filament\``);
        await queryRunner.query(`DROP TABLE \`color\``);
        await queryRunner.query(`DROP TABLE \`brand_filament\``);
        await queryRunner.query(`DROP INDEX \`REL_026e7a3353fe68ecedc7194bda\` ON \`product\``);
        await queryRunner.query(`DROP INDEX \`REL_198c6c53cc43ba423541f95e5e\` ON \`product\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`product_info\``);
    }

}
