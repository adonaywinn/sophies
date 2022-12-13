import { Request, Response } from 'express';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';
 
export interface UserInstance extends Model {
    id: number;
    nome:string;
    sobrenome:string;
    email:string;
    password: string;
}

export const User = sequelize.define<UserInstance>("Users",{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
        //defaultValue
    },
    email: {
        type: DataTypes.STRING,
        unique: true 
    },
    password: {
        type: DataTypes.STRING   
    }
},{
    tableName:'usuario',
    timestamps:false
});