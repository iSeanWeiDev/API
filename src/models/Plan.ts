import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, DataType } from 'sequelize-typescript';

@Table
export class Plan extends Model<Plan> {
  @Column
  public botID!: number;

  @Column
  public type!: string;

  @Column
  public url!: string;

  @Column({
    type: DataType.TEXT,
  })
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
