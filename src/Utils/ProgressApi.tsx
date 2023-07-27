import axios from "axios";

const url = "http://localhost:3500/api/v1/progress";

export const createProgress = async (data: any) => {
  try {
    return await axios.post(`${url}/create-progress`, data).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProgress = async (
id:string
) => {
  try {
    return await axios
      .delete(`${url}/${id}/delete-progress`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const readProgress = async () => {
  try {
    return await axios.get(`${url}/view-progress`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readOneProgress = async (id: string) => {
    try {
      return await axios.get(`${url}/${id}/view-progress-info`).then((res) => {
        return res.data.data;
      });
    } catch (error) {
      console.log(error);
    }
  };
  
