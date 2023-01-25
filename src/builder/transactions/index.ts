import { getExchange } from '../../service/api';
import { Transactions } from '../../types/tansaction';
import { Transaction } from '../../entity/Transactions';
import { AppDataSource } from '../../data-source';

export const Changeresponse = async (transaction: Transactions) => {
  try {
    const result = await getExchange({
      from: transaction.originCoin,
      to: transaction.destinyCoin,
      amount: transaction.originValue
    });

    if (result) {
      const newTransaction = new Transaction();
      newTransaction.userId = transaction.userId;
      newTransaction.originCoin = result.data.query.from;
      newTransaction.originValue = result.data.query.amount;
      newTransaction.destinyCoin = result.data.query.to;
      newTransaction.destinyValue = result.data.result;
      newTransaction.conversionRate = result.data.info.rate;

      const save = await AppDataSource.manager.save(newTransaction);

      return {
        id: save.id,
        userId: save.userId,
        originCoin: save.originCoin,
        originValue: save.originValue,
        destinyCoin: save.destinyCoin,
        destinyValue: save.destinyValue,
        conversionRate: save.conversionRate,
        date: save.created_at
      };
    }
  } catch (error) {
    return error;
  }
};
