export interface MovementVM {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: string;
  realTransaction: string;
  accountId: string;
}

export interface AccountVM {
  avalibleBalance: number;
  iban: string;
  name: string;
}

export const createEmptyAccount = (): AccountVM => ({
  avalibleBalance: 0,
  iban: '',
   name: ''
});