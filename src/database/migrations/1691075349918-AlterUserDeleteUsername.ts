import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserDeleteUsername1691075349918
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'username');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'username',
        type: 'varchar',
      }),
    );
  }
}
