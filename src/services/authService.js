import axiosInstance from './axiosInstance';
import { API_ENDPOINTS } from '../config/apiConfig';

export const loginStudent = async (credentials) => {
  const response = await axiosInstance.post(API_ENDPOINTS.STUDENT_LOGIN, credentials);
  return response.data;
};

export const loginTeacher = async (credentials) => {
  const response = await axiosInstance.post(API_ENDPOINTS.TEACHER_LOGIN, credentials);
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await axiosInstance.post(API_ENDPOINTS.FORGOT_PASSWORD, { email });
  return response.data;
};

const authService = { loginStudent, loginTeacher, forgotPassword };
export default authService;