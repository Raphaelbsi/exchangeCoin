import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { userRouters, transactionsRouters } from './routes';
import cors, { CorsOptions } from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';

const corsOptions: CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
};

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(cors(corsOptions));

app.use(userRouters, transactionsRouters);

app.listen(port, () => console.log(`Server Running on port ${port}`));
