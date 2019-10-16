import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table
export class FUMRecord extends Model<FUMRecord> {
  @Column
  public botID!: number;

  @Column
  public fumID!: number;

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
