import { Request, Response, NextFunction } from "express";
import { User } from '../models/User';
import dotenv from 'dotenv';
import JWT from 'jsonwebtoken';

dotenv.config();


export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction)=> {
        //Fazer verificação Auth
        let success = false;
        if(req.headers.authorization){
            const [authType, token] =  req.headers.authorization.split(' ');
            if(authType === 'Bearer'){
                try{
                    const decoded = JWT.verify(
                        token, 
                        process.env.JWT_SECRET_KEY as string
                    );
                    success = true;
                }catch(err){}
            }
        }
        if(success){
            next();
        }else {
            res.status(401);
            res.json({error: 'Não autorizado'});
        }
    }
}