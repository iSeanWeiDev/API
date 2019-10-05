import {Model, Table, Column, BelongsToMany, Scopes, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';

@Table
export class PostPlanRecord extends Model<PostPlanRecord> {
    @Column
    public botID!: number;

    @Column
    public postPlanID!: number;

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
