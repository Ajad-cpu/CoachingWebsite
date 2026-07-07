import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Badge,
  Tooltip,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';
import colors from '../../utils/colors';
import { getUserData, clearAuthData, getInitials } from '../../utils/helpers';

const Navbar = ({ onToggleSidebar, role }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const userData = getUserData();

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleLogout = () => {
    clearAuthData();
    navigate('/');
    handleClose();
  };

  const handleProfile = () => {
    navigate(`/${role}/profile`);
    handleClose();
  };

  const handleSettings = () => {
    navigate(`/${role}/settings`);
    handleClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: colors.gradient,
        boxShadow: '0 4px 20px rgba(26, 35, 78, 0.3)',
        zIndex: 1201,
      }}
    >
      <Toolbar sx={{ minHeight: 70, px: { xs: 1, sm: 2, md: 3 } }}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onToggleSidebar}
          sx={{ mr: 1, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <SchoolIcon sx={{ mr: 1, fontSize: 32 }} />
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: '0.5px',
            fontSize: { xs: '1rem', sm: '1.25rem' },
            background: 'linear-gradient(135deg, #ffffff, #82b1ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Excel Coaching Institute
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title="Messages">
            <IconButton color="inherit" sx={{ opacity: 0.9 }}>
              <Badge badgeContent={3} color="error" sx={{ '& .MuiBadge-badge': { fontSize: 10 } }}>
                <MessageIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Notifications">
            <IconButton color="inherit" sx={{ opacity: 0.9 }}>
              <Badge badgeContent={5} color="error" sx={{ '& .MuiBadge-badge': { fontSize: 10 } }}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <IconButton onClick={handleMenu} sx={{ ml: 1 }}>
            <Avatar
              sx={{
                bgcolor: colors.accentLight,
                color: colors.primaryDark,
                fontWeight: 700,
                width: 36,
                height: 36,
                fontSize: '0.9rem',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
            >
              {getInitials(userData?.name || 'User')}
            </Avatar>
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: '16px',
              minWidth: '220px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              p: 1,
            },
          }}
        >
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: colors.textPrimary }}>
              {userData?.name || 'User'}
            </Typography>
            <Typography variant="caption" sx={{ color: colors.textMuted, textTransform: 'capitalize' }}>
              {role} Account
            </Typography>
          </Box>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleProfile} sx={{ borderRadius: '8px', py: 1.2 }}>
            <PersonIcon sx={{ mr: 1.5, fontSize: 20, color: colors.accent }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>Profile</Typography>
          </MenuItem>
          <MenuItem onClick={handleSettings} sx={{ borderRadius: '8px', py: 1.2 }}>
            <SettingsIcon sx={{ mr: 1.5, fontSize: 20, color: colors.gray }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>Settings</Typography>
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleLogout} sx={{ borderRadius: '8px', py: 1.2, color: colors.error }}>
            <LogoutIcon sx={{ mr: 1.5, fontSize: 20 }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>Logout</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;