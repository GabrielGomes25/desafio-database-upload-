import AppError from '../errors/AppError';
import Transaction from "../models/Transaction";
import TransactionRepository from "../repositories/TransactionsRepository";
import { getCustomRepository} from 'typeorm';

class DeleteTransactionService {
  public async execute(id:string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transaction = await transactionsRepository.findOne(id);

    if(!transaction){
      throw new AppError('Transaction does not exist');
    }

    await transactionsRepository.remove(transaction);

    return;

  }
}

export default DeleteTransactionService;
