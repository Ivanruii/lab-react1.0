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
    transaction: new Date(movement.transaction).toLocaleDateString(),
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    accountId: movement.accountId,
  }));

export const mapAccountFromApiToVm = (
  account: apiModel.Account
): viewModel.AccountVM => ({
  avalibleBalance: account.balance,
  iban: account.iban,
  name: account.name,
});