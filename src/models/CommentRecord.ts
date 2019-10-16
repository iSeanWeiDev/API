import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table
export class CommentRecord extends Model<CommentRecord> {
  @Column
  public botID!: number;

  @Column
  public filterID!: number;

  @Column
  public commentID!: number;

  @Column
  public mediaID!: string;

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
