import axios from "axios";
import { IDataApi } from "../@types";

export const fetchDataFromUserApi = async () => {
  const { data }: { data: IDataApi } = await axios.get('https://randomuser.me/api');
  return data
}
