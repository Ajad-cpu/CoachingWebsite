import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton, TextField, Select, MenuItem, FormControl, InputLabel, Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, LinearProgress } from '@mui/material';
import DashboardLayout from '../../components/layout/DashboardLayout';
import PageHeader from '../../components/common/PageHeader';
import EmptyState from '../../components/common/EmptyState';
import BookIcon from '@mui/icons-material/Book';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PaymentIcon from '@mui/icons-material/Payment';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChatIcon from '@mui/icons-material/Chat';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import colors from '../../utils/colors';

// ============ Student Courses Page ============
export const StudentCourses = () => {
  const courses = [
    { name: 'JEE Advanced Mathematics', teacher: 'Dr. Sharma', schedule: 'Mon-Wed-Fri', time: '8:00-9:00', progress: 75, status: 'Active' },
    { name: 'JEE Advanced Physics', teacher: 'Prof. Verma', schedule: 'Tue-Thu-Sat', time: '9:15-10:15', progress: 60, status: 'Active' },
    { name: 'JEE Advanced Chemistry', teacher: 'Dr. Patel', schedule: 'Mon-Wed-Fri', time: '10:30-11:30', progress: 85, status: 'Active' },
    { name: 'English Communication', teacher: 'Ms. Gupta', schedule: 'Tue-Thu', time: '11:45-12:30', progress: 45, status: 'Active' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="My Courses" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Courses', path: '/student/courses' }]} />
      <Grid container spacing={3}>
        {courses.map((course, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary }}>{course.name}</Typography>
                    <Typography variant="body2" sx={{ color: colors.textMuted }}>Teacher: {course.teacher}</Typography>
                  </Box>
                  <Chip label={course.status} size="small" sx={{ background: colors.successLight, color: colors.success, fontWeight: 600, borderRadius: '8px' }} />
                </Box>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Chip icon={<CalendarTodayIcon />} label={course.schedule} size="small" variant="outlined" sx={{ borderRadius: '8px', color: colors.textSecondary }} />
                  <Chip label={course.time} size="small" variant="outlined" sx={{ borderRadius: '8px', color: colors.textSecondary }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: colors.textSecondary }}>Progress</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>{course.progress}%</Typography>
                </Box>
                <LinearProgress variant="determinate" value={course.progress} sx={{ height: 6, borderRadius: '3px', bgcolor: colors.lightGray, '& .MuiLinearProgress-bar': { background: colors.gradient, borderRadius: '3px' } }} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

// ============ Student Timetable Page ============
export const StudentTimetable = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const slots = [
    { time: '8:00 - 9:00', mon: 'Mathematics', tue: 'Physics', wed: 'Mathematics', thu: 'Chemistry', fri: 'Mathematics', sat: 'Physics' },
    { time: '9:15 - 10:15', mon: 'Physics', tue: 'Chemistry', wed: 'Physics', thu: 'Mathematics', fri: 'Chemistry', sat: 'Mathematics' },
    { time: '10:30 - 11:30', mon: 'Chemistry', tue: 'Mathematics', wed: 'Chemistry', thu: 'Physics', fri: 'Physics', sat: 'Chemistry' },
    { time: '11:45 - 12:45', mon: 'Doubt Session', tue: 'English', wed: 'Doubt Session', thu: 'English', fri: 'Test', sat: 'Test' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Timetable" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Timetable', path: '/student/timetable' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Time</TableCell>
                {days.map(day => (
                  <TableCell key={day} sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>{day}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {slots.map((slot, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 600, color: colors.accent, borderRight: `1px solid ${colors.border}` }}>{slot.time}</TableCell>
                  {days.map((day, didx) => {
                    const dayKey = day.toLowerCase().slice(0, 3);
                    const subject = day === 'Monday' ? slot.mon : day === 'Tuesday' ? slot.tue : day === 'Wednesday' ? slot.wed : day === 'Thursday' ? slot.thu : day === 'Friday' ? slot.fri : slot.sat;
                    return (
                      <TableCell key={didx} sx={{ borderRight: '1px solid', borderColor: colors.border }}>
                        <Chip label={subject} size="small" sx={{ background: subject === 'Doubt Session' ? colors.warningLight : subject === 'Test' ? colors.errorLight : colors.infoLight, color: subject === 'Doubt Session' ? colors.warning : subject === 'Test' ? colors.error : colors.info, fontWeight: 600, borderRadius: '8px' }} />
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardLayout>
  );
};

// ============ Student Attendance Page ============
export const StudentAttendance = () => {
  const records = [
    { subject: 'Mathematics', total: 24, present: 21, percentage: 87.5 },
    { subject: 'Physics', total: 24, present: 18, percentage: 75 },
    { subject: 'Chemistry', total: 24, present: 22, percentage: 91.7 },
    { subject: 'English', total: 16, present: 14, percentage: 87.5 },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Attendance Summary" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Attendance', path: '/student/attendance' }]} />
      <Grid container spacing={3}>
        {records.map((rec, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textPrimary }}>{rec.subject}</Typography>
                  <Chip label={`${rec.percentage}%`} size="small" sx={{ background: rec.percentage >= 85 ? colors.successLight : rec.percentage >= 75 ? colors.warningLight : colors.errorLight, color: rec.percentage >= 85 ? colors.success : rec.percentage >= 75 ? colors.warning : colors.error, fontWeight: 700, borderRadius: '8px' }} />
                </Box>
                <LinearProgress variant="determinate" value={rec.percentage} sx={{ height: 8, borderRadius: '4px', bgcolor: colors.lightGray, '& .MuiLinearProgress-bar': { background: rec.percentage >= 85 ? colors.gradient : rec.percentage >= 75 ? `linear-gradient(135deg, ${colors.warning}, #ff9800)` : `linear-gradient(135deg, ${colors.error}, #ef5350)`, borderRadius: '4px' } }} />
                <Box sx={{ display: 'flex', gap: 3, mt: 2 }}>
                  <Typography variant="body2" sx={{ color: colors.textMuted }}>Present: <Box component="span" sx={{ fontWeight: 600, color: colors.success }}>{rec.present}</Box></Typography>
                  <Typography variant="body2" sx={{ color: colors.textMuted }}>Total: <Box component="span" sx={{ fontWeight: 600, color: colors.textPrimary }}>{rec.total}</Box></Typography>
                  <Typography variant="body2" sx={{ color: colors.textMuted }}>Absent: <Box component="span" sx={{ fontWeight: 600, color: colors.error }}>{rec.total - rec.present}</Box></Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

// ============ Student Assignments Page ============
export const StudentAssignments = () => {
  const assignments = [
    { title: 'Calculus Assignment 3', subject: 'Mathematics', teacher: 'Dr. Sharma', due: '2024-03-20', status: 'Pending', type: 'Homework' },
    { title: 'Thermodynamics Problems', subject: 'Physics', teacher: 'Prof. Verma', due: '2024-03-22', status: 'Submitted', type: 'Homework' },
    { title: 'Organic Chem Worksheet', subject: 'Chemistry', teacher: 'Dr. Patel', due: '2024-03-25', status: 'Pending', type: 'Worksheet' },
    { title: 'Grammar Exercise', subject: 'English', teacher: 'Ms. Gupta', due: '2024-03-18', status: 'Graded', type: 'Practice' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Assignments" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Assignments', path: '/student/assignments' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Subject</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Teacher</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Due Date</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assignments.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{item.title}</TableCell>
                  <TableCell>{item.subject}</TableCell>
                  <TableCell sx={{ color: colors.textSecondary }}>{item.teacher}</TableCell>
                  <TableCell>{item.due}</TableCell>
                  <TableCell>
                    <Chip label={item.status} size="small" sx={{ background: item.status === 'Graded' ? colors.successLight : item.status === 'Submitted' ? colors.infoLight : colors.warningLight, color: item.status === 'Graded' ? colors.success : item.status === 'Submitted' ? colors.info : colors.warning, fontWeight: 600, borderRadius: '8px' }} />
                  </TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined" startIcon={<DownloadIcon />} sx={{ borderRadius: '8px', textTransform: 'none', borderColor: colors.border, color: colors.textSecondary }}>
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardLayout>
  );
};

// ============ Student Notes Page ============
export const StudentNotes = () => {
  const notes = [
    { title: 'Calculus Quick Reference', subject: 'Mathematics', uploadedBy: 'Dr. Sharma', date: '2024-03-01', pages: 12 },
    { title: 'Thermodynamics Notes', subject: 'Physics', uploadedBy: 'Prof. Verma', date: '2024-02-28', pages: 8 },
    { title: 'Organic Chemistry Reactions', subject: 'Chemistry', uploadedBy: 'Dr. Patel', date: '2024-02-25', pages: 15 },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Study Notes" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Notes', path: '/student/notes' }]} />
      <Grid container spacing={3}>
        {notes.map((note, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <Box sx={{ background: colors.gradient, p: 2, display: 'flex', alignItems: 'center', gap: 1.5, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                <NoteAltIcon sx={{ color: colors.white }} />
                <Typography variant="subtitle2" sx={{ color: colors.white, fontWeight: 600 }}>{note.subject}</Typography>
              </Box>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textPrimary, mb: 1 }}>{note.title}</Typography>
                <Typography variant="body2" sx={{ color: colors.textMuted, mb: 0.5 }}>Uploaded by: {note.uploadedBy}</Typography>
                <Typography variant="body2" sx={{ color: colors.textMuted, mb: 2 }}>{note.date} · {note.pages} pages</Typography>
                <Button variant="contained" fullWidth startIcon={<DownloadIcon />} sx={{ background: colors.gradient, borderRadius: '10px', textTransform: 'none', fontWeight: 600, '&:hover': { opacity: 0.9 } }}>
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

// ============ Student Results Page ============
export const StudentResults = () => {
  const results = [
    { test: 'Mock Test 1', subject: 'Mathematics', score: 78, total: 100, rank: 12, date: '2024-03-01' },
    { test: 'Mock Test 1', subject: 'Physics', score: 72, total: 100, rank: 18, date: '2024-03-01' },
    { test: 'Mock Test 1', subject: 'Chemistry', score: 85, total: 100, rank: 8, date: '2024-03-01' },
    { test: 'Weekly Test 4', subject: 'Mathematics', score: 42, total: 50, rank: 15, date: '2024-02-25' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Test Results" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Results', path: '/student/results' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Test</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Subject</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Score</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Percentage</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Rank</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((res, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{res.test}</TableCell>
                  <TableCell>{res.subject}</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{res.score}/{res.total}</TableCell>
                  <TableCell>
                    <Chip label={`${Math.round((res.score / res.total) * 100)}%`} size="small" sx={{ background: (res.score / res.total) >= 0.75 ? colors.successLight : (res.score / res.total) >= 0.5 ? colors.warningLight : colors.errorLight, color: (res.score / res.total) >= 0.75 ? colors.success : (res.score / res.total) >= 0.5 ? colors.warning : colors.error, fontWeight: 600, borderRadius: '8px' }} />
                  </TableCell>
                  <TableCell>{res.rank}</TableCell>
                  <TableCell>{res.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardLayout>
  );
};

// ============ Student Fees Page ============
export const StudentFees = () => {
  const fees = [
    { feeType: 'Tuition Fee (Jan-Mar)', amount: 45000, paid: 45000, due: '2024-01-10', status: 'Paid', date: '2024-01-05' },
    { feeType: 'Lab Fee', amount: 5000, paid: 5000, due: '2024-01-10', status: 'Paid', date: '2024-01-05' },
    { feeType: 'Exam Fee', amount: 3000, paid: 0, due: '2024-04-01', status: 'Pending', date: '-' },
    { feeType: 'Library Fee', amount: 2000, paid: 2000, due: '2024-01-10', status: 'Paid', date: '2024-01-05' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Fee Status" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Fees', path: '/student/fees' }]} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Fee Type</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Amount</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Paid</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Due Date</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fees.map((fee, idx) => (
                    <TableRow key={idx}>
                      <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{fee.feeType}</TableCell>
                      <TableCell>₹{fee.amount.toLocaleString()}</TableCell>
                      <TableCell>₹{fee.paid.toLocaleString()}</TableCell>
                      <TableCell>{fee.due}</TableCell>
                      <TableCell>
                        <Chip icon={fee.status === 'Paid' ? <CheckCircleIcon sx={{ fontSize: 14 }} /> : <CancelIcon sx={{ fontSize: 14 }} />} label={fee.status} size="small" sx={{ background: fee.status === 'Paid' ? colors.successLight : colors.warningLight, color: fee.status === 'Paid' ? colors.success : colors.warning, fontWeight: 600, borderRadius: '8px' }} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', background: colors.gradient, color: colors.white }}>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <PaymentIcon sx={{ fontSize: 48, mb: 2, opacity: 0.8 }} />
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>₹52,000</Typography>
              <Typography variant="body1" sx={{ opacity: 0.8 }}>Total Fees Paid</Typography>
              <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>₹3,000</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Pending Amount</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

// ============ Student Notices Page ============
export const StudentNotices = () => {
  const notices = [
    { title: 'Summer Vacation Schedule', content: 'Summer break will start from May 1st to June 15th. Regular classes will resume from June 16th.', date: '2024-03-15', type: 'Important', author: 'Principal' },
    { title: 'Mock Test Schedule', content: 'Next round of mock tests for JEE Advanced will be held on March 25th and 26th.', date: '2024-03-12', type: 'Exam', author: 'Academic Dept.' },
    { title: 'Parent-Teacher Meeting', content: 'PTM scheduled for March 30th from 10 AM to 2 PM. All parents are requested to attend.', date: '2024-03-10', type: 'Event', author: 'Admin' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Notices & Announcements" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Notices', path: '/student/notices' }]} />
      {notices.map((notice, idx) => (
        <Card key={idx} sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', mb: 2, transition: 'transform 0.2s', '&:hover': { transform: 'translateX(4px)' } }}>
          <CardContent sx={{ p: 3, display: 'flex', gap: 2 }}>
            <Avatar sx={{ background: notice.type === 'Important' ? colors.errorLight : notice.type === 'Exam' ? colors.warningLight : colors.infoLight, color: notice.type === 'Important' ? colors.error : notice.type === 'Exam' ? colors.warning : colors.info }}>
              <CampaignIcon />
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textPrimary }}>{notice.title}</Typography>
                <Chip label={notice.type} size="small" sx={{ background: notice.type === 'Important' ? colors.errorLight : notice.type === 'Exam' ? colors.warningLight : colors.infoLight, color: notice.type === 'Important' ? colors.error : notice.type === 'Exam' ? colors.warning : colors.info, fontWeight: 600, borderRadius: '8px' }} />
              </Box>
              <Typography variant="body2" sx={{ color: colors.textSecondary, mt: 1, lineHeight: 1.6 }}>{notice.content}</Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 1.5 }}>
                <Typography variant="caption" sx={{ color: colors.textMuted }}>By {notice.author}</Typography>
                <Typography variant="caption" sx={{ color: colors.textMuted }}>{notice.date}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </DashboardLayout>
  );
};

// ============ Student Messages Page ============
export const StudentMessages = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Messages" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Messages', path: '/student/messages' }]} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 2, px: 1 }}>Conversations</Typography>
              {['Dr. Sharma', 'Prof. Verma', 'Dr. Patel', 'Ms. Gupta'].map((name, idx) => (
                <Paper key={idx} variant="outlined" sx={{ p: 1.5, mb: 1, borderRadius: '12px', borderColor: idx === 0 ? colors.accent : colors.border, bgcolor: idx === 0 ? colors.infoLight : 'transparent', cursor: 'pointer', '&:hover': { bgcolor: colors.offWhite } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar sx={{ width: 36, height: 36, background: colors.gradient, fontSize: '0.8rem', fontWeight: 600 }}>{name.split(' ').map(n => n[0]).join('')}</Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>{name}</Typography>
                      <Typography variant="caption" sx={{ color: colors.textMuted }}>Last message 2h ago</Typography>
                    </Box>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: idx === 0 ? colors.success : 'transparent' }} />
                  </Box>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, pb: 2, borderBottom: `1px solid ${colors.border}` }}>
                <Avatar sx={{ background: colors.gradient, fontWeight: 600 }}>DS</Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.textPrimary }}>Dr. Sharma</Typography>
                  <Typography variant="caption" sx={{ color: colors.textMuted }}>Mathematics Teacher</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3, maxHeight: 300, overflow: 'auto' }}>
                <Paper variant="outlined" sx={{ p: 2, borderRadius: '12px', maxWidth: '70%', alignSelf: 'flex-start', bgcolor: colors.offWhite, borderColor: colors.border }}>
                  <Typography variant="body2" sx={{ color: colors.textPrimary }}>Good morning! Please complete the calculus assignment by tomorrow.</Typography>
                  <Typography variant="caption" sx={{ color: colors.textMuted, mt: 0.5, display: 'block' }}>9:30 AM</Typography>
                </Paper>
                <Paper variant="outlined" sx={{ p: 2, borderRadius: '12px', maxWidth: '70%', alignSelf: 'flex-end', bgcolor: colors.infoLight, borderColor: colors.accent }}>
                  <Typography variant="body2" sx={{ color: colors.textPrimary }}>Sure sir, I will submit it by tonight.</Typography>
                  <Typography variant="caption" sx={{ color: colors.textMuted, mt: 0.5, display: 'block' }}>9:45 AM</Typography>
                </Paper>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField fullWidth placeholder="Type your message..." variant="outlined" size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                <Button variant="contained" sx={{ background: colors.gradient, borderRadius: '12px', minWidth: '48px', '&:hover': { opacity: 0.9 } }}>
                  <SendIcon />
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

// ============ Student Profile Page ============
export const StudentProfile = () => {
  return (
    <DashboardLayout>
      <PageHeader title="My Profile" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Profile', path: '/student/profile' }]} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <Box sx={{ background: colors.gradient, p: 4, textAlign: 'center', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
              <Avatar sx={{ width: 96, height: 96, mx: 'auto', mb: 2, border: '3px solid rgba(255,255,255,0.3)', bgcolor: colors.accentLight, color: colors.primaryDark, fontWeight: 700, fontSize: '2rem' }}>RK</Avatar>
              <Typography variant="h5" sx={{ color: colors.white, fontWeight: 700 }}>Rahul Kumar</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Student ID: STU001</Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 3 }}>Personal Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Full Name</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>Rahul Kumar</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Email</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>rahul.kumar@email.com</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Phone</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>+91 98765 43210</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Class</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>12th (Science)</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

// ============ Student Settings Page ============
export const StudentSettings = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Settings" breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }, { label: 'Settings', path: '/student/settings' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 3 }}>Account Settings</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Full Name" defaultValue="Rahul Kumar" variant="outlined" size="medium" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" defaultValue="rahul.kumar@email.com" variant="outlined" size="medium" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Phone" defaultValue="+91 98765 43210" variant="outlined" size="medium" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Address" defaultValue="123, Mumbai" variant="outlined" size="medium" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
            </Grid>
          </Grid>
          <Button variant="contained" sx={{ mt: 3, background: colors.gradient, borderRadius: '12px', px: 4, py: 1.2, fontWeight: 600, textTransform: 'none', '&:hover': { opacity: 0.9 } }}>
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};