import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table
export class Bot extends Model<Bot> {
  @Column
  public botName!: string;

  @Column
  public accountName!: string;

  @Column
  public accountPass!: string;

  @Column
  public accImgUrl!: string;

  @Column
  public maxComment!: number;

  @Column
  public delayInterval!: number;

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
