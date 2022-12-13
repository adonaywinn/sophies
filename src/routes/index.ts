import { Router, Request, Response } from 'express';

//controllers
import { home } from '../controllers/homeController';
import { account } from '../controllers/accountController';
const router = Router();

router.get('/', home);

router.get('/account', (req: Request, res: Response) => {
    res.render("pages/account");
});
router.get('/account/dados-pessoais', (req: Request, res: Response) =>{
    res.render("pages/dados-pessoais");
})
router.get('/account/financas', (req: Request, res: Response) =>{
    res.render("pages/financas");
})
router.get('/account/promocoes', (req: Request, res: Response) =>{
    res.render("pages/promocoes");
})
router.get('/account/configuracoes', (req: Request, res: Response) =>{
    res.render("pages/configuracoes");
})
router.get('/account/help-info', (req: Request, res: Response) =>{
    res.render("pages/help-info");
})
router.get('/account/minhas-apostas', (req: Request, res: Response) =>{
    res.render("pages/minhas-apostas");
})
router.get('/eventos-ao-vivo', (req: Request, res: Response) =>{
    res.render("pages/eventos-aovivo");
})

export default router;