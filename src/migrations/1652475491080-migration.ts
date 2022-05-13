import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1652475491080 implements MigrationInterface {
    name = 'migration1652475491080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `twofacode` int NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `twofacode`");
    }

}
