import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1692190330161 implements MigrationInterface {
    name = 'Migration1692190330161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` uuid NOT NULL, \`email\` varchar(255) NULL, \`displayName\` varchar(255) NULL, \`passwordHash\` varchar(255) NULL, \`role\` varchar(255) NOT NULL DEFAULT 'user', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` uuid NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` text NULL, \`type\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` uuid NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`property\` (\`id\` uuid NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` text NULL, \`listingType\` varchar(255) NOT NULL, \`propertyType\` varchar(255) NOT NULL, \`area\` decimal(10,2) NOT NULL, \`areaUnit\` varchar(255) NOT NULL, \`floor\` int UNSIGNED NULL, \`totalFloors\` int UNSIGNED NULL, \`bhk\` int NULL, \`landUse\` varchar(255) NULL, \`frontageArea\` int NULL, \`coordinates\` point NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userId\` uuid NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_32b856438dffdc269fa84434d9f\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`property\` ADD CONSTRAINT \`FK_d90007b39cfcf412e15823bebc1\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`property\` DROP FOREIGN KEY \`FK_d90007b39cfcf412e15823bebc1\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_32b856438dffdc269fa84434d9f\``);
        await queryRunner.query(`DROP TABLE \`property\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
