import {Model, Table, Column, BelongsToMany, Scopes, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';

@Table
export class PostPlan extends Model<PostPlan> {
    @Column
    public botID!: number;

    @Column
    public text!: string;

    @Column
    public dateTime!: Date;

    @Column
    public mediaType!: string;

    @Column
    public mediaUrl!: string;

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
