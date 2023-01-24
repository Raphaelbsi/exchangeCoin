import express, { Request, Response } from 'express';
import { SinginResponse, SingunResponse } from '../builder/users';

const router = express.Router();

router.post('/singup', async (req: Request, res: Response) => {
  const response: {
    status: number;
    message: string;
  } = await SingunResponse(req.body);
  return res.status(response.status).json(response.message);
});

router.post('/singin', async (req: Request, res: Response) => {
  const response: {
    status: number;
    message: string;
    token?: string;
  } = await SinginResponse(req.body);
  if (response.status == 200) {
    return res
      .status(response.status)
      .json({ message: response.message, token: response.token });
  }
  return res.status(response.status).json(response.message);
});

export default router;
