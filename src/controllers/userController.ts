import {Request, Response} from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { sequelize } from '../instances/mysql';

//Models
import { User } from '../models/User';

export const user = async ( req: Request, res: Response ) => {
    let statusLogin = 0;
    res.render('pages/entrar', {
        statusLogin
    });

}
export const register = async ( req: Request, res: Response ) => {
    let statusLogin = 0;
    if(req.body.email && req.body.password){
        let { email, password } = req.body;
        let hasUser = await User.findOne({where:{email}});
        if(!hasUser){
            let newUser = await User.create({email, password});
            const token = JWT.sign(
                {id: newUser.id, email: newUser.email},
                process.env.JWT_SECRET_KEY as string,
                {expiresIn: '2h'}
            );
            
            res.status(201);
            res.json({id: newUser.id, token});
        }else{
            res.json({ email:{msg: 'Email já existe'}});
        }
    }

    res.json({error: 'email e/ou senha não prenchidos'});
}

export const login = async ( req: Request, res: Response ) => {
    if(req.body.email && req.body.password){
        let email: string = req.body.email;
        let password: string = req.body.password;

        let user = await User.findOne({where: {email, password}});
        if(user){
            const token = JWT.sign(
                {id: user.id, email: user.email},
                process.env.JWT_SECRET_KEY as string,
                {expiresIn: '2h'}
            );
            res.json({ status: true, user, token});
            return;
        }
    }
    res.json({status: false});
}

export const entrar = async ( req: Request, res: Response ) => {
    let statusLogin = 0;
    console.log(req.body);
    res.render('pages/entrar', {
        statusLogin
    });
}


export const cadastrar = async ( req: Request, res: Response ) => {
    let statusLogin = 0;
    res.render('pages/cadastrar', {
        statusLogin
    });

}



