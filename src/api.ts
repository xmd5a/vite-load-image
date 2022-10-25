import axios from "axios";

const API_URL = "/api";

const getImage = () =>
  axios.get(`${API_URL}/image`).then((response) => response.data);

export { getImage };
