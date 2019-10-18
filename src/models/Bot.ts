import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, Length } from 'sequelize-typescript';

@Table
export class Bot extends Model<Bot> {
  @Length({ min: 500 })
  @Column
  public userID!: number;

  @Column
  public botName!: string;

  @Column
  public accountName!: string;

  @Column
  public accountPass!: string;

  @Column
  public proxyHostName!: string;

  @Column
  public proxyPort!: string;

  @Column
  public proxyProtocol!: string;

  @Column
  public qtyComment: number;

  @Column
  public maxHours: number;

  @Column
  public timeDelay: number;

  @Column
  public qtyLike: number;

  @Column
  public qtyFollow: number;

  @Column
  public qtyUnFollow: number;

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
