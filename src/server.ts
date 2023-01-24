import express from 'express';
import router from './routes/users';
import cors, { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
};

export const app = express();

app.use(express.json());

app.use(cors(corsOptions));

app.use(router);

app.listen(3000, () => 'Server Running on port 3000');
