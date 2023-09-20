import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVM[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount.toString(),
    balance: movement.balance.toString(),
    transaction: movement.transaction,
    realTransaction: movement.realTransaction,
    accountId: movement.accountId,
  }));

export const mapAccountFromApiToVm = (
    account: apiModel.Account[]
): viewModel.AccountVM[] => 
  account.map((account) => ({
    avalibleBalance: account.balance,
    iban: account.iban,
    name: account.name,
  }));