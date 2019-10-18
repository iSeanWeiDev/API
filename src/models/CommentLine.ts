import { Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table
export class CommentLine extends Model<CommentLine> {
  @Column
  public botID!: number;

  @Column
  public commentID!: number;

  @Column
  public filterID!: string;

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
