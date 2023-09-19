import Axios from "axios";
import { Account } from "./account-info.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountInfo = (): Promise<Account[]> =>
  Axios.get<Account[]>(url).then(({ data }) => data);
