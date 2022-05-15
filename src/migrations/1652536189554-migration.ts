import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1652536189554 implements MigrationInterface {
    name = 'migration1652536189554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `activationcode` int NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `activationcode`");
    }

}
