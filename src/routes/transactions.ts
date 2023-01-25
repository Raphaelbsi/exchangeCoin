import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { Save } from '../controller/transactions';

const transactionsRouters = express.Router();

transactionsRouters.get('/change', async (req: Request, res: Response) => {
  const response = await Save(req.body);
  return res.status(200).json(response);
});

export default transactionsRouters;
