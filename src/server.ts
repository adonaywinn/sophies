import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';

//ENV
import dotenv from 'dotenv';

import mainRoutes from './routes/index';
import painelRoutes from './routes/painel';
import user from './routes/user';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use('/', mainRoutes);
server.use('/painel', painelRoutes);
server.use('/user', user);

server.use((req: Request, res: Response)=>{
    res.status(404).send('<a href="http://localhost/">Pagiona Nao Encontrada</a>');
});

server.listen(process.env.PORT);