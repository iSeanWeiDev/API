import {Model, Table, Column, BelongsToMany, Scopes, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';

@Table
export class Filter extends Model<Filter> {
    @Column
    public botID!: number;

    @Column
    public text!: string;

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
