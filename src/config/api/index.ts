import axios, {AxiosInstance} from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/"
})

export default api