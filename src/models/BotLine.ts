import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, DataType } from 'sequelize-typescript';

@Table
export class BotLine extends Model<BotLine> {
  @Column
  public botID!: number;

  @Column({
    type: DataType.TEXT,
  })
  public avatarUrl!: string;

  @Column
  public stateID!: number;

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
