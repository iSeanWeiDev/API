import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, DataType } from 'sequelize-typescript';

@Table
export class DirectMessageLine extends Model<DirectMessageLine> {
  @Column
  public botID!: number;

  @Column
  public isManual!: boolean;

  @Column
  public DMID!: number;

  @Column
  public clientID!: string;

  @Column
  public clientName!: string;

  @Column({
    type: DataType.TEXT,
  })
  public clientImgUrl!: string;

  @Column({
    type: DataType.TEXT,
  })
  public clientText!: string;

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
