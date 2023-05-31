import { useDispatch } from "react-redux";
import { fetchStart, getSuccess, fetchFail } from "../features/blogSlice";
// import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"
import useAxios from "./useAxios";

const useBlogCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  // ---------- BLOGS -----------

  const getBlogData = async (url) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken(`api/${url}/`);
      dispatch(getSuccess({data, url}));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { getBlogData };
};
export default useBlogCall;
