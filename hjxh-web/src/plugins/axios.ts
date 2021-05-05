import axios from "axios";

const $ = axios.create({
  baseURL: "http://localhost:8000/api/v2/",
});

export default $;
