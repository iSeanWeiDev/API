import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table
export class FollowUpMessageLine extends Model<FollowUpMessageLine> {
  @Column
  public botID!: number;

  @Column
  public FUMID!: number;

  @Column
  public clientID!: string;

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
