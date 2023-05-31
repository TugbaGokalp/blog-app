import axios from "axios";

const useAxios = () => {
  const token = "6ce9839946313a076dc102e2e23b6e7ee5832782";
  const axiosPublic = axios.create({
    baseURL: "https://32312.fullstack.clarusway.com/",
  });
  const axiosWithToken = axios.create({
    baseURL: "https://32312.fullstack.clarusway.com/",
    headers: { Authorization: `Token ${token}` },
  });
  return { axiosPublic, axiosWithToken };
};
export default useAxios;





