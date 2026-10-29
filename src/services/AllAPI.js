import { BASEURL } from "../services/BaseURL";
import axiosConfig from "../services/AxiosConfig";

export const addStudent = async (reqBody) => {
  return await axiosConfig("post", `${BASEURL}/studentDatas`, reqBody);
};

export const getAllStudents = async () => {
  return await axiosConfig("get", `${BASEURL}/studentDatas`, "");
};

export const deleteStudent = async (id) => {
  return await axiosConfig("delete", `${BASEURL}/studentDatas/${id}`, "");
};

export const updateStudent = async (id, reqBody) => {
  return await axiosConfig("put", `${BASEURL}/studentDatas/${id}`, reqBody);
};
