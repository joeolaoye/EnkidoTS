import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1652302569745 implements MigrationInterface {
    name = 'migration1652302569745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `fullname` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `phonenumber` varchar(255) NOT NULL, `activated` tinyint NOT NULL, `datecreated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `dateupdated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `datedeleted` datetime(6) NULL, `datelastlogin` datetime NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
