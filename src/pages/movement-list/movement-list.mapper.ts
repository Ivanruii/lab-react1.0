import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (movementList: apiModel.Movement[]): viewModel.MovementVM[] => {
  return movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount,
    balance: movement.balance,
    transaction: movement.transaction,
    realTransaction: movement.realTransaction,
    accountId: movement.accountId,
  }));
}
