import {Model, Table, Column, BelongsToMany, Scopes, CreatedAt, UpdatedAt, DeletedAt} from 'sequelize-typescript';

@Scopes(() => ({

}))

@Table
export class BotStatus extends Model<BotStatus> {
    @Column
    public botID!: number;

    @Column
    public statusID!: number;

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