import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table
export class PlanLine extends Model<PlanLine> {
  @Column
  public botID!: number;

  @Column
  public planID!: number;

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
