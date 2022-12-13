import {Request, Response} from 'express';
import { sequelize } from '../instances/mysql';

//Models
import {User} from '../models/User';

export const home = async ( req: Request, res: Response ) => {
    let statusLogin = 0;
    let users = await User.findAll({
        raw: true,
        nest: true,
    });

    res.render('pages/home', {
        users,
        statusLogin
    });

}
