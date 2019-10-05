import {Model, Table, BelongsToMany, Scopes, CreatedAt, UpdatedAt, Column, DeletedAt} from 'sequelize-typescript';
import {Role} from './Role';
import {UserRole} from './UserRole';

@Scopes(() => ({
  role: {
    include: [
      {
        model: Role,
        through: {
            attributes: [],
        },
      },
    ],
  },
}))

@Table
export class User extends Model<User> {
  @Column
  public firstName !: string;

  @Column
  public lastName!: string;

  @Column
  public email!: string;

  @Column
  public userName!: string;

  @Column 
  public password!: string;

  @Column
  public billToken!: string;

  @BelongsToMany(() => Role, () => UserRole)
  public role!: Role[];

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
