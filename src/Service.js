import axios from "axios";
import {serverUrl} from "./Constants";

const getFormDetails = async () => {
  return await axios.get(`${serverUrl}/api/v1/form/fetchOne`);
}

const saveFormDetails = async (data) => {
  return await axios.post(`${serverUrl}/api/v1/item/add`, data);
}

export {getFormDetails, saveFormDetails}