import {Request, Response} from 'express';
import { sequelize } from '../instances/mysql';

//Models
import { User} from '../models/User';

export const account = async ( req: Request, res: Response ) => {



    res.render('pages/account', {});

}