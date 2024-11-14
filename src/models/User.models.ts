import { Table, Column, Model, DataType, ForeignKey, AllowNull, HasOne, HasMany,BelongsTo } from "sequelize-typescript";
import Role from "./Role.models";
import Tipo_dni from "./Tipodni.models";


@Table({
    tableName: 'users',
    timestamps: false,
})
class User extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(),
    })
    full_name!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(),
    })
    surname!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    password!: string;

    @Column({
        type: DataType.TEXT,
    })
    address!: string;

    @Column({
        type: DataType.STRING(15),
    })
    phone!: string;


    

    @Column({
        type: DataType.INTEGER,
    })
    dni!: number;


    @Column({
        type: DataType.STRING,
        unique: true
    })
    email!: string;


    @ForeignKey(() => Tipo_dni)
    @Column({
        type:DataType.INTEGER(),
    })
    tipo_dni:number

    // Relación uno a uno: Un usuario pertenece a un role
    @ForeignKey(() => Role)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
        defaultValue: 2,
    })
    roleId!: number;



}

export default User;
