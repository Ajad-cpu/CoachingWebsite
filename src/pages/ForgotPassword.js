import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import colors from '../utils/colors';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', background: colors.offWhite, alignItems: 'center', justifyContent: 'center', p: 2 }}>
      <Paper
        elevation={0}
        sx={{ width: '100%', maxWidth: 440, p: { xs: 3, sm: 4 }, borderRadius: '24px', border: '1px solid', borderColor: colors.border }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <SchoolIcon sx={{ fontSize: 48, color: colors.primary, mb: 1 }} />
          <Typography variant="h5" sx={{ fontWeight: 700, color: colors.textPrimary }}>
            Forgot Password
          </Typography>
          <Typography variant="body2" sx={{ color: colors.textMuted, mt: 0.5 }}>
            Enter your email to receive reset instructions
          </Typography>
        </Box>

        {sent ? (
          <Alert severity="success" sx={{ borderRadius: '12px', mb: 2 }}>
            Password reset link has been sent to your email. Please check your inbox.
          </Alert>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              size="medium"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': { borderRadius: '12px', '&.Mui-focused fieldset': { borderColor: colors.primary } },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                background: colors.gradient,
                borderRadius: '12px',
                py: 1.5,
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { opacity: 0.9 },
              }}
            >
              Send Reset Link
            </Button>
          </Box>
        )}

        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Link
            href="#"
            onClick={() => navigate('/login')}
            sx={{ color: colors.accent, fontWeight: 600, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
          >
            ← Back to Login
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;