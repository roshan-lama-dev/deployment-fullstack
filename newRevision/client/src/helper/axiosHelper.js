import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1";

export const postUser = async (obj) => {
  try {
    const { data } = await axios.post("http://localhost:8000/api/v1/user", obj);
    return data;
  } catch (error) {
    console.log(error);
  }
};
