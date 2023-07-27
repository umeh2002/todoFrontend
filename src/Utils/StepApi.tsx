import axios from "axios";

const url = "http://localhost:3500/api/v1/step";

export const createStep = async (id:string ,data: any) => {
  try {
    return await axios.post(`${url}/${id}/create-step`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStep = async (
  taskId: string,
  stepId: string
) => {
  try {
    return await axios
      .delete(`${url}/${taskId}/${stepId}/delete-one-step`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readStep = async (id: string) => {
  try {
    return await axios.get(`${url}/${id}/view-step`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

