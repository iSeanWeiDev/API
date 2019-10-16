import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table
export class DM extends Model<DM> {
  @Column
  public botID!: number;

  @Column
  public text!: string;

  @CreatedAt
  @Column
  public createdAt!: Date;

  @UpdatedAt
  @Column
  public updatedAt!: Date;

  @DeletedAt
  @Column
  public deletedAt!: Date;
}
