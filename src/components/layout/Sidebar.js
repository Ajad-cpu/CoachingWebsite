import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import QuizIcon from '@mui/icons-material/Quiz';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChatIcon from '@mui/icons-material/Chat';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import PaymentIcon from '@mui/icons-material/Payment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import colors from '../../utils/colors';
import { getUserRole } from '../../utils/helpers';

const SIDEBAR_WIDTH = 260;

const studentMenuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/student/dashboard' },
  { text: 'My Courses', icon: <BookIcon />, path: '/student/courses' },
  { text: 'Timetable', icon: <CalendarTodayIcon />, path: '/student/timetable' },
  { text: 'Attendance', icon: <PeopleIcon />, path: '/student/attendance' },
  { text: 'Assignments', icon: <AssignmentIcon />, path: '/student/assignments' },
  { text: 'Study Notes', icon: <NoteAltIcon />, path: '/student/notes' },
  { text: 'Test Results', icon: <AssessmentIcon />, path: '/student/results' },
  { text: 'Fee Status', icon: <PaymentIcon />, path: '/student/fees' },
  { text: 'Notices', icon: <CampaignIcon />, path: '/student/notices' },
  { text: 'Messages', icon: <ChatIcon />, path: '/student/messages' },
];

const teacherMenuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/teacher/dashboard' },
  { text: 'Students', icon: <PeopleIcon />, path: '/teacher/students' },
  { text: 'Attendance', icon: <CalendarTodayIcon />, path: '/teacher/attendance' },
  { text: 'Fees', icon: <AttachMoneyIcon />, path: '/teacher/fees' },
  { text: 'Admissions', icon: <SchoolIcon />, path: '/teacher/admissions' },
  { text: 'Timetable', icon: <CalendarTodayIcon />, path: '/teacher/timetable' },
  { text: 'Assignments', icon: <AssignmentIcon />, path: '/teacher/assignments' },
  { text: 'Notes', icon: <NoteAltIcon />, path: '/teacher/notes' },
  { text: 'Tests', icon: <QuizIcon />, path: '/teacher/tests' },
  { text: 'Results', icon: <AssessmentIcon />, path: '/teacher/results' },
  { text: 'Progress', icon: <TrendingUpIcon />, path: '/teacher/progress' },
  { text: 'Notices', icon: <CampaignIcon />, path: '/teacher/notices' },
  { text: 'Messages', icon: <ChatIcon />, path: '/teacher/messages' },
];

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const role = getUserRole();
  const menuItems = role === 'teacher' ? teacherMenuItems : studentMenuItems;

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          background: colors.gradient,
          py: 3,
          px: 2.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        <SchoolIcon sx={{ color: colors.white, fontSize: 32 }} />
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: colors.white, fontWeight: 700, lineHeight: 1.2 }}
          >
            Excel Coaching
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: colors.accentLight, fontWeight: 500, textTransform: 'capitalize' }}
          >
            {role} Portal
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

      <Box sx={{ flex: 1, overflow: 'auto', py: 1, background: colors.sidebarBg }}>
        <List sx={{ px: 1 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 0.3 }}>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    if (isMobile) onClose();
                  }}
                  sx={{
                    borderRadius: '10px',
                    py: 1.2,
                    px: 2,
                    background: isActive ? 'rgba(130, 177, 255, 0.15)' : 'transparent',
                    '&:hover': {
                      background: 'rgba(130, 177, 255, 0.1)',
                    },
                    transition: 'all 0.2s ease',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: isActive ? colors.accentLight : colors.gray,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: '0.9rem',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? colors.white : colors.lightGray,
                      },
                    }}
                  />
                  {isActive && (
                    <Box
                      sx={{
                        width: 4,
                        height: 24,
                        bgcolor: colors.accentLight,
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box
        sx={{
          background: colors.primaryDark,
          p: 2.5,
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Typography variant="caption" sx={{ color: colors.gray, textAlign: 'center', display: 'block' }}>
          &copy; 2024 Excel Coaching
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isMobile ? open : true}
      onClose={onClose}
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          boxSizing: 'border-box',
          border: 'none',
          boxShadow: '2px 0 20px rgba(0,0,0,0.1)',
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;
export { SIDEBAR_WIDTH };