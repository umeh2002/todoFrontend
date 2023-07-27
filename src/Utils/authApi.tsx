import axios from "axios";

const url = "http://localhost:3500/api/v1/auth";

export const createUser = async (data: any) => {
  try {
     await axios.post(`http://localhost:3500/api/v1/auth/register`, data).then((res:any) => {
    return res.data.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (data: any) => {
  try {
     await axios.post(`${url}/sign-in`, data).then((res) => {
     return res.data.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const readOne = async (id: string) => {
  try {
    return await axios.get(`${url}/${id}/read-one`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
