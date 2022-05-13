import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1652474931736 implements MigrationInterface {
    name = 'migration1652474931736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `twofa` tinyint NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `twofa`");
    }

}
