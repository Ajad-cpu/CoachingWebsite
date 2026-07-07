const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Auth
  STUDENT_LOGIN: `${BASE_URL}/auth/student/login`,
  TEACHER_LOGIN: `${BASE_URL}/auth/teacher/login`,
  FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,

  // Student
  STUDENT_PROFILE: `${BASE_URL}/student/profile`,
  STUDENT_ENROLLED_COURSES: `${BASE_URL}/student/courses`,
  STUDENT_TIMETABLE: `${BASE_URL}/student/timetable`,
  STUDENT_ATTENDANCE: `${BASE_URL}/student/attendance`,
  STUDENT_HOMEWORK: `${BASE_URL}/student/homework`,
  STUDENT_NOTICES: `${BASE_URL}/student/notices`,
  STUDENT_TEST_RESULTS: `${BASE_URL}/student/test-results`,
  STUDENT_FEE_STATUS: `${BASE_URL}/student/fee-status`,
  STUDENT_NOTES: `${BASE_URL}/student/notes`,
  STUDENT_ANNOUNCEMENTS: `${BASE_URL}/student/announcements`,
  STUDENT_MESSAGES: `${BASE_URL}/student/messages`,

  // Teacher
  TEACHER_DASHBOARD: `${BASE_URL}/teacher/dashboard`,
  TEACHER_STUDENTS: `${BASE_URL}/teacher/students`,
  TEACHER_ATTENDANCE: `${BASE_URL}/teacher/attendance`,
  TEACHER_FEES: `${BASE_URL}/teacher/fees`,
  TEACHER_ADMISSIONS: `${BASE_URL}/teacher/admissions`,
  TEACHER_TIMETABLE: `${BASE_URL}/teacher/timetable`,
  TEACHER_ASSIGNMENTS: `${BASE_URL}/teacher/assignments`,
  TEACHER_NOTES: `${BASE_URL}/teacher/notes`,
  TEACHER_TESTS: `${BASE_URL}/teacher/tests`,
  TEACHER_RESULTS: `${BASE_URL}/teacher/results`,
  TEACHER_PROGRESS: `${BASE_URL}/teacher/progress`,
  TEACHER_NOTICES: `${BASE_URL}/teacher/notices`,
  TEACHER_MESSAGES: `${BASE_URL}/teacher/messages`,
  TEACHER_PROFILE: `${BASE_URL}/teacher/profile`,
};

export default API_ENDPOINTS;