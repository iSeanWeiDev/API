import {Model, Table, ForeignKey, Column, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';
import {User} from './User';
import {Role} from './Role';

@Table
export class UserRole extends Model<UserRole> {
    @ForeignKey(() => User)
    @Column
    public userId!: number;

    @ForeignKey(() => Role)
    @Column
    public roleId!: number;

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
