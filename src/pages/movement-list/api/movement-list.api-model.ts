export interface Movement {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: string;
  realTransaction: string;
  accountId: string;
}

export interface Account {
  id: string;
  iban: string;
  type: string;
  name: string;
  balance: number;
  lastTransaction: string;
}  