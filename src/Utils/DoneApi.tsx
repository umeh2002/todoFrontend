import axios from "axios";

const url = "http://localhost:3500/api/v1/done";

export const createDone = async (data: any) => {
  try {
    return await axios.post(`${url}/done-task`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProgressStep = async (
  progressId: string,
  progressStepId: string
) => {
  try {
    return await axios
      .delete(`${url}/${progressId}/${progressStepId}/delete-progress-step`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readDone = async (id: string) => {
  try {
    return await axios.get(`${url}/${id}/read`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
