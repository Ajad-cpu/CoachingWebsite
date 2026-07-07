import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Landing & Auth
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

// Student Pages
import StudentDashboard from '../pages/student/Dashboard';
import {
  StudentCourses,
  StudentTimetable,
  StudentAttendance,
  StudentAssignments,
  StudentNotes,
  StudentResults,
  StudentFees,
  StudentNotices,
  StudentMessages,
  StudentProfile,
  StudentSettings,
} from '../pages/student/StudentPages';

// Teacher Pages
import TeacherDashboard from '../pages/teacher/Dashboard';
import {
  TeacherStudents,
  TeacherAttendance,
  TeacherFees,
  TeacherAdmissions,
  TeacherTimetable,
  TeacherAssignments,
  TeacherNotes,
  TeacherTests,
  TeacherResults,
  TeacherProgress,
  TeacherNotices,
  TeacherMessages,
  TeacherProfile,
  TeacherSettings,
  Contact,
} from '../pages/teacher/TeacherPages';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Student Routes */}
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/courses"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentCourses />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/timetable"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentTimetable />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/attendance"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentAttendance />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/assignments"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentAssignments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/notes"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentNotes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/results"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentResults />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/fees"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentFees />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/notices"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentNotices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/messages"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentMessages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/profile"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/student/settings"
        element={
          <ProtectedRoute allowedRoles={['student']}>
            <StudentSettings />
          </ProtectedRoute>
        }
      />

      {/* Teacher Routes */}
      <Route
        path="/teacher/dashboard"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/students"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherStudents />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/attendance"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherAttendance />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/fees"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherFees />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/admissions"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherAdmissions />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/timetable"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherTimetable />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/assignments"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherAssignments />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/notes"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherNotes />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/tests"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherTests />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/results"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherResults />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/progress"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherProgress />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/notices"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherNotices />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/messages"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherMessages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/profile"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teacher/settings"
        element={
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherSettings />
          </ProtectedRoute>
        }
      />

      {/* Contact Route */}
      <Route path="/contact" element={<Contact />} />

      {/* Redirect unmatched routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;