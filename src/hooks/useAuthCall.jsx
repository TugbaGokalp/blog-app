import { useDispatch } from "react-redux";
import {
    fetchFail,
    fetchStart,
    loginSuccess,
    logoutSuccess,
    registerSuccess,
  } from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuthCall = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const BASE_URL = "https://32312.fullstack.clarusway.com/"

    // --------- LOGIN ---------------------

    const login = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(`${BASE_URL}users/auth/login/`, userInfo)
            dispatch(loginSuccess(data));
            toastSuccessNotify("Login performed");
            navigate(-1)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Username or password is wrong!")
            
        }
    }

    //------------- LOGOUT -------------

    const logout = async() => {
        dispatch(fetchStart())
        try {
            await axios.post(
                `${BASE_URL}/users/auth/logout/`
            )
            dispatch(logoutSuccess())
            toastSuccessNotify("Logout performed successfully!")
            navigate("/")
            
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Failed to logout!")
        }
    }

    // ---------- REGISTER ---------

    const register = async() => {
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(
                `${BASE_URL}users/register`, userInfo
            )
            dispatch(registerSuccess(data))
            toastSuccessNotify("Register Successfully")
            navigate("/")
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify("Register Failed")
            
        }
    }

    return {login, logout, register}

}

export default useAuthCall