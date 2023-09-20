import Axios from "axios";
import { Account, Movement } from "./movement-list.api-model";

const url = import.meta.env.VITE_BASE_API_URL;
const movementsEndPoint = `movements`;
const accountListEndPoint = `account-list`;

export const getMovementList = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(`${url}/${movementsEndPoint}`, { params: { accountId } }).then(({ data }) => data);

export const getAccountInfo = (accountId: string): Promise<Account[]> =>
  Axios.get<Account[]>(`${url}/${accountListEndPoint}`, { params: { accountId } }).then(({ data }) => data);