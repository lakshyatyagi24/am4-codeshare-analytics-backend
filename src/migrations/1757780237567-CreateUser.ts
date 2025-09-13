import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1757780237567 implements MigrationInterface {
    name = 'CreateUser1757780237567'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('user', 'admin')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying(50) NOT NULL, "password" character varying(255) NOT NULL, "am4_username" character varying(50), "role" "public"."user_role_enum" NOT NULL DEFAULT 'user', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_9f5aff11679da12fe9085739ce9" UNIQUE ("am4_username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    }

}
