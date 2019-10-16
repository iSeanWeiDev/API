import { Model, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, Column, DeletedAt } from 'sequelize-typescript';
import { User } from './User';
import { UserRole } from './UserRole';

@Scopes(() => ({
  user: {
    include: [
      {
        model: User,
        through: {
          attributes: [],
        },
      },
    ],
  },
}))
@Table
export class Role extends Model<Role> {
  @Column
  public name!: string;

  @Column
  public description!: string;

  @BelongsToMany(() => User, () => UserRole)
  public user!: User[];

  @Column
  public isFree!: boolean;

  @Column
  public amountDialog!: number;

  @Column
  public amountProxy!: number;

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
