import { HOST_API } from '@/config-global';
import axios, { AxiosRequestConfig } from 'axios';

const API_KEY = process.env.NEXT_API_KEY || "4b2slSgSAYrxp";

const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    "api-key": API_KEY
  },
  withCredentials: true
});

axiosInstance.interceptors.request.use(config => config);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error.response?.data || 'Something went wrong');
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig?]): Promise<any> => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
  chat: '/api/chat',
  auth: {
    me: '/user/me',
    login: '/user/login',
    logout: '/user/logout',
    register: '/user/register',
    forgotPassword: '/user/forgot-password',
    resetPassword: '/user/reset-password',
    verifyOTP: '/user/verify-2fa',
    resendOTP: '/user/resend-2fa',
  }
};