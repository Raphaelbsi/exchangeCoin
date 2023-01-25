import { User } from '../../entity/Users';
import { Transactions } from '../../types/tansaction';
import { AppDataSource } from '../../data-source';
import { Changeresponse } from '../../builder/transactions';
import jwt from 'jsonwebtoken';

const AllUser = AppDataSource.manager.getRepository(User);

export async function Save(transaction: Transactions) {
  try {
    const { token } = transaction;
    const decoded = jwt.decode(token);
    if (decoded) {
      const { userId }: any = decoded;
      transaction.userId = userId;
      const response = await Changeresponse(transaction);
      return response;
    }
  } catch (error) {}
}
