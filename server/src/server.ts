import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from  'celebrate';


const app = express();
app.use(cors());
//Forma para o express entender o corpo da requisição como json 
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads' )));

app.use(errors());

app.listen(3333);