import React from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import colors from '../../utils/colors';

const PageHeader = ({ title, breadcrumbs = [] }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ mb: 3 }}>
      {breadcrumbs.length > 0 && (
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" sx={{ color: colors.gray }} />}
          sx={{ mb: 1 }}
        >
          {breadcrumbs.map((crumb, index) => (
            index < breadcrumbs.length - 1 ? (
              <Link
                key={index}
                onClick={() => navigate(crumb.path)}
                sx={{
                  color: colors.accent,
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {crumb.label}
              </Link>
            ) : (
              <Typography
                key={index}
                sx={{ color: colors.textMuted, fontSize: '0.875rem', fontWeight: 500 }}
              >
                {crumb.label}
              </Typography>
            )
          ))}
        </Breadcrumbs>
      )}
      <Typography variant="h4" sx={{ fontWeight: 700, color: colors.textPrimary }}>
        {title}
      </Typography>
    </Box>
  );
};

export default PageHeader;