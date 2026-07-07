import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import colors from '../../utils/colors';

const ConfirmDialog = ({ open, title, message, onConfirm, onCancel, confirmText = 'Confirm', cancelText = 'Cancel' }) => (
  <Dialog
    open={open}
    onClose={onCancel}
    PaperProps={{
      sx: { borderRadius: '16px', p: 1, minWidth: '320px' },
    }}
  >
    <DialogTitle sx={{ fontWeight: 600, color: colors.textPrimary }}>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ color: colors.textSecondary }}>{message}</DialogContentText>
    </DialogContent>
    <DialogActions sx={{ p: 2, gap: 1 }}>
      <Button
        onClick={onCancel}
        variant="outlined"
        sx={{
          borderColor: colors.border,
          color: colors.textSecondary,
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
        }}
      >
        {cancelText}
      </Button>
      <Button
        onClick={onConfirm}
        variant="contained"
        sx={{
          background: colors.gradient,
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          '&:hover': { opacity: 0.9 },
        }}
      >
        {confirmText}
      </Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmDialog;