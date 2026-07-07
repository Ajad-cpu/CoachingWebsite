import React from 'react';
import { Box, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import colors from '../../utils/colors';

const EmptyState = ({ message = 'No data available', icon: Icon = InboxIcon }) => (
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
    <Icon sx={{ fontSize: 64, color: colors.gray }} />
    <Typography variant="h6" sx={{ color: colors.textMuted, fontWeight: 500 }}>
      {message}
    </Typography>
  </Box>
);

export default EmptyState;