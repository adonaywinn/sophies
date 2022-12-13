import { Router, Request, Response } from 'express';
import { Auth } from '../middlewares/auth';

//controllers
import * as UController from '../controllers/userController';
const router = Router();

router.get('/login', UController.login);
router.get('/register', UController.register);
router.get('/entrar', UController.entrar);
router.get('/cadastrar', UController.cadastrar);

router.get('/cdatrar', (req: Request, res: Response) => {
    res.render("pages/cadastrar");
});


export default router;