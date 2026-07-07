import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Chip, Avatar, Paper, Divider } from '@mui/material';
import DashboardLayout from '../../components/layout/DashboardLayout';
import PageHeader from '../../components/common/PageHeader';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import colors from '../../utils/colors';
import { getUserData } from '../../utils/helpers';

const TeacherDashboard = () => {
  const userData = getUserData();

  const stats = [
    { label: 'Total Students', value: '156', icon: <PeopleIcon />, color: colors.info, bg: colors.infoLight },
    { label: 'Active Courses', value: '8', icon: <SchoolIcon />, color: colors.primary, bg: colors.lightGray },
    { label: 'Revenue Collected', value: '₹2.4L', icon: <AttachMoneyIcon />, color: colors.success, bg: colors.successLight },
    { label: 'Avg Attendance', value: '85%', icon: <TrendingUpIcon />, color: colors.warning, bg: colors.warningLight },
  ];

  const recentActivity = [
    { action: 'Fee payment received', student: 'Ananya Patel', amount: '₹25,000', time: '10 mins ago' },
    { action: 'New admission', student: 'Rohit Singh', course: 'NEET UG', time: '1 hour ago' },
    { action: 'Assignment submitted', student: 'Priya Sharma', subject: 'Physics', time: '2 hours ago' },
    { action: 'Attendance marked', student: 'Batch A - Morning', count: '28/32', time: '3 hours ago' },
  ];

  return (
    <DashboardLayout>
      <PageHeader
        title={`Welcome, ${userData?.name || 'Teacher'}!`}
        breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }]}
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
                <Box sx={{ width: 52, height: 52, borderRadius: '14px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color }}>
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: colors.textPrimary }}>{stat.value}</Typography>
                  <Typography variant="body2" sx={{ color: colors.textMuted, fontWeight: 500 }}>{stat.label}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Recent Activity */}
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 3 }}>
                Recent Activity
              </Typography>
              {recentActivity.map((item, idx) => (
                <Paper
                  key={idx}
                  variant="outlined"
                  sx={{ p: 2, mb: 1.5, borderRadius: '12px', borderColor: colors.border, '&:hover': { borderColor: colors.accent, bgcolor: colors.infoLight } }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Avatar sx={{ width: 40, height: 40, background: colors.gradient, fontSize: '0.9rem', fontWeight: 600 }}>
                        {item.student.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>{item.action}</Typography>
                        <Typography variant="caption" sx={{ color: colors.textMuted }}>
                          {item.student} {item.amount || item.course || item.subject || item.count ? `· ${item.amount || item.course || item.subject || item.count}` : ''}
                        </Typography>
                      </Box>
                    </Box>
                    <Chip label={item.time} size="small" sx={{ fontSize: '0.65rem', color: colors.textMuted, background: colors.offWhite, borderRadius: '8px' }} />
                  </Box>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions & Info */}
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', mb: 3 }}>
            <Box sx={{ background: colors.gradient, p: 3, textAlign: 'center', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
              <Avatar sx={{ width: 72, height: 72, mx: 'auto', mb: 1, border: '3px solid rgba(255,255,255,0.3)', bgcolor: colors.accentLight, color: colors.primaryDark, fontWeight: 700, fontSize: '1.5rem' }}>
                {userData?.name?.split(' ').map(n => n[0]).join('') || 'T'}
              </Avatar>
              <Typography variant="h6" sx={{ color: colors.white, fontWeight: 700 }}>{userData?.name || 'Teacher'}</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>ID: TCH001 · Physics Dept.</Typography>
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography variant="body2" sx={{ color: colors.textMuted }}>Students Today</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>32 / 38</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5, mt: 1 }}>
                <Typography variant="body2" sx={{ color: colors.textMuted }}>Pending Reviews</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>7</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5, mt: 1 }}>
                <Typography variant="body2" sx={{ color: colors.textMuted }}>Admissions Pending</Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>4</Typography>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <WarningIcon sx={{ color: colors.warning }} /> Needs Attention
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Paper variant="outlined" sx={{ p: 1.5, borderRadius: '10px', borderColor: colors.border, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: colors.textPrimary }}>Low attendance</Typography>
                  <Chip label="3 students" size="small" sx={{ background: colors.errorLight, color: colors.error, fontWeight: 600, borderRadius: '8px', fontSize: '0.65rem' }} />
                </Paper>
                <Paper variant="outlined" sx={{ p: 1.5, borderRadius: '10px', borderColor: colors.border, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: colors.textPrimary }}>Fee pending</Typography>
                  <Chip label="₹45,000" size="small" sx={{ background: colors.warningLight, color: colors.warning, fontWeight: 600, borderRadius: '8px', fontSize: '0.65rem' }} />
                </Paper>
                <Paper variant="outlined" sx={{ p: 1.5, borderRadius: '10px', borderColor: colors.border, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: colors.textPrimary }}>Unmarked attendance</Typography>
                  <Chip label="2 batches" size="small" sx={{ background: colors.infoLight, color: colors.info, fontWeight: 600, borderRadius: '8px', fontSize: '0.65rem' }} />
                </Paper>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default TeacherDashboard;