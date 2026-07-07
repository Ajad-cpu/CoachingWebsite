import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import colors from '../../utils/colors';

const LoadingState = ({ message = 'Loading...', fullPage = false }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: fullPage ? '100vh' : '300px',
      width: '100%',
      gap: 2,
    }}
  >
    <CircularProgress
      size={48}
      thickness={4}
      sx={{ color: colors.secondary }}
    />
    <Typography
      variant="body1"
      sx={{ color: colors.textSecondary, fontWeight: 500 }}
    >
      {message}
    </Typography>
  </Box>
);

export default LoadingState;