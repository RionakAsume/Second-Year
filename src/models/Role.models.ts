import { Table, Column, Model, DataType, Unique, AllowNull, HasMany } from "sequelize-typescript";
import User from "./User.models";

@Table({
    tableName: 'role',
    timestamps: true, 
})
class Role extends Model {
    @Unique
    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    description: string;


    @HasMany(() => User)
    user: User;
}

export default Role;
