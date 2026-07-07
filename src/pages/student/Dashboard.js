import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Chip, LinearProgress, Avatar, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardLayout from '../../components/layout/DashboardLayout';
import PageHeader from '../../components/common/PageHeader';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import colors from '../../utils/colors';
import { getUserData } from '../../utils/helpers';

const StudentDashboard = () => {
  const userData = getUserData();

  const stats = [
    { label: 'Enrolled Courses', value: '4', icon: <BookIcon />, color: colors.info, bg: colors.infoLight },
    { label: 'Attendance', value: '87%', icon: <EventNoteIcon />, color: colors.success, bg: colors.successLight },
    { label: 'Assignments Pending', value: '2', icon: <AssignmentIcon />, color: colors.warning, bg: colors.warningLight },
    { label: 'Avg. Test Score', value: '78%', icon: <TrendingUpIcon />, color: colors.primary, bg: colors.lightGray },
  ];

  const recentAnnouncements = [
    { title: 'Summer Break Schedule', date: '2 days ago', type: 'important' },
    { title: 'Mock Test Results Published', date: '5 days ago', type: 'info' },
    { title: 'Parent-Teacher Meeting', date: '1 week ago', type: 'event' },
  ];

  const upcomingAssignments = [
    { subject: 'Mathematics', title: 'Calculus Assignment 3', due: 'Tomorrow' },
    { subject: 'Physics', title: 'Thermodynamics Problems', due: 'In 3 days' },
    { subject: 'Chemistry', title: 'Organic Chem Worksheet', due: 'In 5 days' },
  ];

  return (
    <DashboardLayout>
      <PageHeader
        title={`Welcome, ${userData?.name || 'Student'}!`}
        breadcrumbs={[{ label: 'Dashboard', path: '/student/dashboard' }]}
      />

      {/* Stats Cards */}
      <Grid container spacing={2.5} sx={{ mb: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                borderRadius: '16px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' },
              }}
            >
              <CardContent sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '14px',
                    background: stat.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textMuted, fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Course Progress */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 2 }}>
                Course Progress
              </Typography>
              {[
                { name: 'JEE Advanced Mathematics', progress: 75, teacher: 'Dr. Sharma' },
                { name: 'JEE Advanced Physics', progress: 60, teacher: 'Prof. Verma' },
                { name: 'JEE Advanced Chemistry', progress: 85, teacher: 'Dr. Patel' },
                { name: 'English Communication', progress: 45, teacher: 'Ms. Gupta' },
              ].map((course, idx) => (
                <Box key={idx} sx={{ mb: idx < 3 ? 2.5 : 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>
                      {course.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600 }}>
                      {course.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={course.progress}
                    sx={{
                      height: 8,
                      borderRadius: '4px',
                      backgroundColor: colors.lightGray,
                      '& .MuiLinearProgress-bar': {
                        background: course.progress >= 70 ? colors.gradient : course.progress >= 50 ? `linear-gradient(135deg, ${colors.warning}, #ff9800)` : `linear-gradient(135deg, ${colors.error}, #ef5350)`,
                        borderRadius: '4px',
                      },
                    }}
                  />
                  <Typography variant="caption" sx={{ color: colors.textMuted, mt: 0.3, display: 'block' }}>
                    Teacher: {course.teacher}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Timetable */}
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', mt: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 2 }}>
                Today's Schedule
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  { time: '8:00 - 9:00', subject: 'Mathematics', room: 'Room 101', teacher: 'Dr. Sharma' },
                  { time: '9:15 - 10:15', subject: 'Physics', room: 'Room 203', teacher: 'Prof. Verma' },
                  { time: '10:30 - 11:30', subject: 'Chemistry', room: 'Lab 1', teacher: 'Dr. Patel' },
                  { time: '11:45 - 12:30', subject: 'Doubt Session', room: 'Room 101', teacher: 'All Faculty' },
                ].map((slot, idx) => (
                  <Paper
                    key={idx}
                    variant="outlined"
                    sx={{
                      p: 1.5,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderRadius: '12px',
                      borderColor: colors.border,
                      transition: 'all 0.2s',
                      '&:hover': { borderColor: colors.accent, bgcolor: colors.infoLight },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Chip label={slot.time} size="small" sx={{ background: colors.gradient, color: colors.white, fontWeight: 600, borderRadius: '8px', fontSize: '0.75rem' }} />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>
                          {slot.subject}
                        </Typography>
                        <Typography variant="caption" sx={{ color: colors.textMuted }}>
                          {slot.teacher} · {slot.room}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          {/* Profile Card */}
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', mb: 3 }}>
            <Box sx={{ background: colors.gradient, p: 3, textAlign: 'center', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
              <Avatar sx={{ width: 72, height: 72, mx: 'auto', mb: 1, border: '3px solid rgba(255,255,255,0.3)', bgcolor: colors.accentLight, color: colors.primaryDark, fontWeight: 700, fontSize: '1.5rem' }}>
                {userData?.name?.split(' ').map(n => n[0]).join('') || 'S'}
              </Avatar>
              <Typography variant="h6" sx={{ color: colors.white, fontWeight: 700 }}>
                {userData?.name || 'Student'}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                ID: STU001
              </Typography>
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography variant="body2" sx={{ color: colors.textMuted }}>Class</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>12th (Science)</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5, mt: 1 }}>
                <Typography variant="body2" sx={{ color: colors.textMuted }}>Batch</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>Morning (6-9 AM)</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5, mt: 1 }}>
                <Typography variant="body2" sx={{ color: colors.textMuted }}>Fee Status</Typography>
                <Chip label="Paid" size="small" sx={{ background: colors.successLight, color: colors.success, fontWeight: 600, borderRadius: '8px' }} />
              </Box>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', mb: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <AnnouncementIcon sx={{ color: colors.warning }} />
                Announcements
              </Typography>
              {recentAnnouncements.map((item, idx) => (
                <Box key={idx} sx={{ mb: idx < recentAnnouncements.length - 1 ? 2 : 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>
                      {item.title}
                    </Typography>
                    <Chip label={item.type} size="small" sx={{ fontSize: '0.65rem', fontWeight: 600, background: item.type === 'important' ? colors.errorLight : colors.infoLight, color: item.type === 'important' ? colors.error : colors.info, borderRadius: '6px' }} />
                  </Box>
                  <Typography variant="caption" sx={{ color: colors.textMuted }}>
                    {item.date}
                  </Typography>
                  {idx < recentAnnouncements.length - 1 && <Divider sx={{ mt: 1.5 }} />}
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Assignments */}
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <AssignmentIcon sx={{ color: colors.warning }} />
                Upcoming Tasks
              </Typography>
              {upcomingAssignments.map((item, idx) => (
                <Box key={idx} sx={{ mb: idx < upcomingAssignments.length - 1 ? 2 : 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>
                        {item.title}
                      </Typography>
                      <Typography variant="caption" sx={{ color: colors.textMuted }}>
                        {item.subject}
                      </Typography>
                    </Box>
                    <Chip label={item.due} size="small" sx={{ fontWeight: 600, fontSize: '0.65rem', background: idx === 0 ? colors.errorLight : colors.warningLight, color: idx === 0 ? colors.error : colors.warning, borderRadius: '8px' }} />
                  </Box>
                  {idx < upcomingAssignments.length - 1 && <Divider sx={{ mt: 1.5 }} />}
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default StudentDashboard;