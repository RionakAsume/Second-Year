import { Table, Column, Model, DataType, Unique, AllowNull, HasMany, HasOne, BelongsTo } from "sequelize-typescript";
import User from "./User.models";

@Table({
    tableName: 'tipo_dni',
    timestamps: true, 
})
class Tipo_dni extends Model {
    @Unique
    @AllowNull(false)
    @Column({
        type: DataType.STRING(20)
    })
    description: string;

  
    @HasMany(() => User)
    user: User;
}

export default Tipo_dni;
