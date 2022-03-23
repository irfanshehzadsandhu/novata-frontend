import axios from "axios";
import {serverUrl} from "./Constants";

const getFormDetails = async () => {
  return await axios.get(`${serverUrl}/api/v1/forms/00b98f36-8d0b-44a1-9d12-2d05fbe0f3ee`);
}

const saveFormDetails = async (data) => {
  return await axios.post(`${serverUrl}/api/v1/item/add`, data);
}

export {getFormDetails, saveFormDetails}