import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import colors from '../../utils/colors';

const ErrorState = ({ message = 'Something went wrong', onRetry }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '200px',
      width: '100%',
      py: 6,
      gap: 2,
    }}
  >
    <ErrorOutlineIcon sx={{ fontSize: 64, color: colors.error }} />
    <Typography variant="h6" sx={{ color: colors.error, fontWeight: 500 }}>
      {message}
    </Typography>
    {onRetry && (
      <Button
        variant="contained"
        onClick={onRetry}
        sx={{
          mt: 1,
          background: colors.gradient,
          borderRadius: '8px',
          px: 4,
          '&:hover': { opacity: 0.9 },
        }}
      >
        Retry
      </Button>
    )}
  </Box>
);

export default ErrorState;