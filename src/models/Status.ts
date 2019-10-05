import {Model, Table, Column, BelongsToMany, Scopes, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';

@Scopes(() => ({

}))

@Table
export class Status extends Model<Status> {
    @Column
    public type!: string;

    @Column
    public description!: string;

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