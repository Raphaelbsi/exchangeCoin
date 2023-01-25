import { Transactions } from '../../types/tansaction';
import { Changeresponse } from '../../builder/transactions';
import jwt from 'jsonwebtoken';

export async function Save(transaction: Transactions) {
  try {
    const { token } = transaction;
    const decoded = jwt.decode(token);
    if (decoded) {
      // eslint-disable-next-line
      const { userId }: any = decoded;
      transaction.userId = userId;
      const response = await Changeresponse(transaction);
      return response;
    }
  } catch (error) {
    return error;
  }
}
