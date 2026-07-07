import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Tabs,
  Tab,
  IconButton,
  InputAdornment,
  Divider,
  Chip,
  Alert,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SchoolIcon from '@mui/icons-material/School';
import LoginIcon from '@mui/icons-material/Login';
import colors from '../utils/colors';
import { setAuthData } from '../utils/helpers';

const Login = () => {
  const [role, setRole] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (_, newValue) => {
    setRole(newValue);
    setErrors({});
    setLoginError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setLoginError('');

    // Simulate login for demo
    setTimeout(() => {
      const roleName = role === 0 ? 'student' : 'teacher';
      const mockData = {
        token: 'mock_jwt_token_' + Date.now(),
        userData: {
          name: roleName === 'teacher' ? 'Dr. Amit Sharma' : 'Rahul Kumar',
          email: form.email,
          role: roleName,
          id: roleName === 'teacher' ? 'TCH001' : 'STU001',
        },
      };
      setAuthData(mockData.token, roleName, mockData.userData);
      setLoading(false);
      navigate(`/${roleName}/dashboard`);
    }, 1000);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', background: colors.offWhite }}>
      {/* Left Side - Branding */}
      <Box
        sx={{
          flex: 1,
          background: colors.gradient,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 6,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-30%',
            right: '-20%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(130, 177, 255, 0.1)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(48, 79, 254, 0.15)',
          },
        }}
      >
        <SchoolIcon sx={{ fontSize: 80, color: colors.white, mb: 3, position: 'relative', zIndex: 1 }} />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: colors.white,
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            fontSize: { md: '2.2rem', lg: '3rem' },
          }}
        >
          Welcome Back to
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: colors.accentLight,
            textAlign: 'center',
            mb: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Excel Coaching Institute
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            maxWidth: 400,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Login to access your dashboard, track progress, and continue your learning journey.
        </Typography>
      </Box>

      {/* Right Side - Login Form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 4 },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            maxWidth: 440,
            p: { xs: 3, sm: 4 },
            borderRadius: '24px',
            border: '1px solid',
            borderColor: colors.border,
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <SchoolIcon sx={{ fontSize: 48, color: colors.primary, mb: 1, display: { md: 'none' } }} />
            <Typography variant="h5" sx={{ fontWeight: 700, color: colors.textPrimary }}>
              Sign In
            </Typography>
            <Typography variant="body2" sx={{ color: colors.textMuted, mt: 0.5 }}>
              Access your account dashboard
            </Typography>
          </Box>

          <Tabs
            value={role}
            onChange={handleRoleChange}
            variant="fullWidth"
            sx={{
              mb: 3,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                py: 1.5,
                borderRadius: '12px 12px 0 0',
              },
              '& .Mui-selected': { color: colors.primary, fontWeight: 700 },
              '& .MuiTabs-indicator': { background: colors.gradient, height: 3, borderRadius: '3px' },
            }}
          >
            <Tab label="Student Login" />
            <Tab label="Teacher Login" />
          </Tabs>

          {loginError && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: '12px' }}>
              {loginError}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              size="medium"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                mb: 2.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '&.Mui-focused fieldset': { borderColor: colors.primary },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              size="medium"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 1,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  '&.Mui-focused fieldset': { borderColor: colors.primary },
                },
              }}
            />

            <Box sx={{ textAlign: 'right', mb: 3 }}>
              <Link
                href="#"
                sx={{ color: colors.accent, fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                background: colors.gradient,
                borderRadius: '12px',
                py: 1.5,
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { opacity: 0.9 },
                '&.Mui-disabled': { opacity: 0.7 },
              }}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </Box>

          <Divider sx={{ my: 3 }}>
            <Chip label="OR" size="small" sx={{ color: colors.textMuted, fontWeight: 600 }} />
          </Divider>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: colors.textMuted }}>
              Don't have an account?{' '}
              <Link
                href="#"
                sx={{ color: colors.accent, fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
              >
                Contact Institute
              </Link>
            </Typography>
            <Button
              onClick={() => navigate('/')}
              sx={{ mt: 2, color: colors.textSecondary, textTransform: 'none', fontWeight: 500 }}
            >
              ← Back to Home
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;