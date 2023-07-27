import axios from "axios";

const url = "http://localhost:3500/api/v1/task";

export const createTask = async (id:string ,data: any) => {
  try {
    return await axios.post(`${url}/${id}/create-task`, data).then((res) => {
    console.log(res.data.data)
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (
id:string
) => {
  try {
    return await axios
      .delete(`${url}/${id}/delete-one-task`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readTask = async () => {
  try {
    return await axios.get(`${url}/view-task`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStepTask = async (id: string) => {
    try {
      return await axios.get(`${url}/${id}/update-step-task`).then((res) => {
        return res.data.data;
      });
    } catch (error) {
      console.log(error);
    }
  };
  
