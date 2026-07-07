import React, { useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton, TextField, Avatar, Divider, LinearProgress, Dialog, DialogTitle, DialogContent, DialogActions, MenuItem, Select, FormControl, InputLabel, Tab, Tabs } from '@mui/material';
import DashboardLayout from '../../components/layout/DashboardLayout';
import PageHeader from '../../components/common/PageHeader';
import EmptyState from '../../components/common/EmptyState';
import ConfirmDialog from '../../components/common/ConfirmDialog';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import QuizIcon from '@mui/icons-material/Quiz';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChatIcon from '@mui/icons-material/Chat';
import SchoolIcon from '@mui/icons-material/School';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import colors from '../../utils/colors';

// ============ Teacher Students Page ============
export const TeacherStudents = () => {
  const students = [
    { id: 'STU001', name: 'Rahul Kumar', class: '12th Sci', batch: 'Morning', attendance: 87, fees: 'Paid', contact: '+91 98765 43210' },
    { id: 'STU002', name: 'Priya Sharma', class: '12th Sci', batch: 'Morning', attendance: 92, fees: 'Paid', contact: '+91 98765 43211' },
    { id: 'STU003', name: 'Ananya Patel', class: '12th Sci', batch: 'Evening', attendance: 78, fees: 'Pending', contact: '+91 98765 43212' },
    { id: 'STU004', name: 'Rohit Singh', class: '11th Sci', batch: 'Morning', attendance: 95, fees: 'Paid', contact: '+91 98765 43213' },
    { id: 'STU005', name: 'Neha Gupta', class: '11th Sci', batch: 'Evening', attendance: 82, fees: 'Pending', contact: '+91 98765 43214' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Student Management" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Students', path: '/teacher/students' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {['ID', 'Name', 'Class', 'Batch', 'Attendance', 'Fees', 'Contact', 'Actions'].map(h => (
                  <TableCell key={h} sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((s, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 600, color: colors.accent }}>{s.id}</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{s.name}</TableCell>
                  <TableCell>{s.class}</TableCell>
                  <TableCell>{s.batch}</TableCell>
                  <TableCell>
                    <Chip label={`${s.attendance}%`} size="small" sx={{ background: s.attendance >= 85 ? colors.successLight : s.attendance >= 75 ? colors.warningLight : colors.errorLight, color: s.attendance >= 85 ? colors.success : s.attendance >= 75 ? colors.warning : colors.error, fontWeight: 600, borderRadius: '8px' }} />
                  </TableCell>
                  <TableCell>
                    <Chip label={s.fees} size="small" sx={{ background: s.fees === 'Paid' ? colors.successLight : colors.warningLight, color: s.fees === 'Paid' ? colors.success : colors.warning, fontWeight: 600, borderRadius: '8px' }} />
                  </TableCell>
                  <TableCell sx={{ color: colors.textSecondary }}>{s.contact}</TableCell>
                  <TableCell>
                    <IconButton size="small" sx={{ color: colors.accent }}><VisibilityIcon fontSize="small" /></IconButton>
                    <IconButton size="small" sx={{ color: colors.warning }}><EditIcon fontSize="small" /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardLayout>
  );
};

// ============ Teacher Attendance Page ============
export const TeacherAttendance = () => {
  const [tab, setTab] = useState(0);
  const students = [
    { name: 'Rahul Kumar', morning: 'Present', evening: 'Present' },
    { name: 'Priya Sharma', morning: 'Present', evening: 'Absent' },
    { name: 'Ananya Patel', morning: 'Absent', evening: 'Present' },
    { name: 'Rohit Singh', morning: 'Present', evening: 'Present' },
    { name: 'Neha Gupta', morning: 'Present', evening: 'Absent' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Attendance Management" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Attendance', path: '/teacher/attendance' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <CardContent>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2, '& .MuiTab-root': { textTransform: 'none', fontWeight: 600 }, '& .MuiTabs-indicator': { background: colors.gradient } }}>
            <Tab label="Morning Batch" />
            <Tab label="Evening Batch" />
          </Tabs>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Student Name</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Mark</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((s, idx) => (
                  <TableRow key={idx}>
                    <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{s.name}</TableCell>
                    <TableCell>
                      <Chip label={tab === 0 ? s.morning : s.evening} size="small" sx={{ background: (tab === 0 ? s.morning : s.evening) === 'Present' ? colors.successLight : colors.errorLight, color: (tab === 0 ? s.morning : s.evening) === 'Present' ? colors.success : colors.error, fontWeight: 600, borderRadius: '8px' }} />
                    </TableCell>
                    <TableCell>
                      <Button size="small" variant="outlined" sx={{ mr: 1, borderRadius: '8px', textTransform: 'none', borderColor: colors.successLight, color: colors.success, '&:hover': { bgcolor: colors.successLight } }}>Present</Button>
                      <Button size="small" variant="outlined" sx={{ borderRadius: '8px', textTransform: 'none', borderColor: colors.errorLight, color: colors.error, '&:hover': { bgcolor: colors.errorLight } }}>Absent</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" sx={{ background: colors.gradient, borderRadius: '10px', px: 4, textTransform: 'none', fontWeight: 600, '&:hover': { opacity: 0.9 } }}>Save Attendance</Button>
          </Box>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

// ============ Teacher Fees Page ============
export const TeacherFees = () => {
  const fees = [
    { student: 'Rahul Kumar', id: 'STU001', total: 45000, paid: 45000, pending: 0, due: '2024-01-10', status: 'Paid' },
    { student: 'Priya Sharma', id: 'STU002', total: 45000, paid: 30000, pending: 15000, due: '2024-01-10', status: 'Partial' },
    { student: 'Ananya Patel', id: 'STU003', total: 45000, paid: 0, pending: 45000, due: '2024-01-10', status: 'Pending' },
    { student: 'Rohit Singh', id: 'STU004', total: 40000, paid: 40000, pending: 0, due: '2024-02-01', status: 'Paid' },
    { student: 'Neha Gupta', id: 'STU005', total: 40000, paid: 20000, pending: 20000, due: '2024-02-01', status: 'Partial' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Fee Management" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Fees', path: '/teacher/fees' }]} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', background: colors.gradient, color: colors.white, p: 2 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <AttachMoneyIcon sx={{ fontSize: 40, mb: 1, opacity: 0.8 }} />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>₹2,15,000</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Total Collected</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: colors.success }}>3</Typography>
              <Typography variant="body2" sx={{ color: colors.textMuted }}>Fully Paid</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: colors.warning }}>2</Typography>
              <Typography variant="body2" sx={{ color: colors.textMuted }}>Partial/Overdue</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: colors.error }}>₹80,000</Typography>
              <Typography variant="body2" sx={{ color: colors.textMuted }}>Total Pending</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    {['Student', 'Total Fee', 'Paid', 'Pending', 'Due Date', 'Status', 'Action'].map(h => (
                      <TableCell key={h} sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>{h}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fees.map((f, idx) => (
                    <TableRow key={idx}>
                      <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{f.student} ({f.id})</TableCell>
                      <TableCell>₹{f.total.toLocaleString()}</TableCell>
                      <TableCell sx={{ color: colors.success, fontWeight: 600 }}>₹{f.paid.toLocaleString()}</TableCell>
                      <TableCell sx={{ color: f.pending > 0 ? colors.error : colors.success, fontWeight: 600 }}>₹{f.pending.toLocaleString()}</TableCell>
                      <TableCell>{f.due}</TableCell>
                      <TableCell>
                        <Chip label={f.status} size="small" sx={{ background: f.status === 'Paid' ? colors.successLight : f.status === 'Partial' ? colors.warningLight : colors.errorLight, color: f.status === 'Paid' ? colors.success : f.status === 'Partial' ? colors.warning : colors.error, fontWeight: 600, borderRadius: '8px' }} />
                      </TableCell>
                      <TableCell>
                        <Button size="small" variant="outlined" sx={{ borderRadius: '8px', textTransform: 'none', borderColor: colors.border, color: colors.accent }}>Record Payment</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

// ============ Teacher Admissions Page ============
export const TeacherAdmissions = () => {
  const inquiries = [
    { name: 'Vikram Patel', phone: '+91 99887 76655', course: 'JEE Advanced', status: 'New', date: '2024-03-15' },
    { name: 'Sneha Reddy', phone: '+91 88776 65544', course: 'NEET UG', status: 'Follow-up', date: '2024-03-14' },
    { name: 'Arun Kumar', phone: '+91 77665 54433', course: 'Foundation', status: 'Enrolled', date: '2024-03-13' },
    { name: 'Divya Singh', phone: '+91 66554 43322', course: 'NEET UG', status: 'New', date: '2024-03-12' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Admission Inquiries" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Admissions', path: '/teacher/admissions' }]} />
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField placeholder="Search by name..." variant="outlined" size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px', minWidth: '250px' } }} />
        <FormControl size="small" sx={{ minWidth: '150px' }}>
          <InputLabel>Status</InputLabel>
          <Select label="Status" defaultValue="">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Follow-up">Follow-up</MenuItem>
            <MenuItem value="Enrolled">Enrolled</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ background: colors.gradient, borderRadius: '10px', textTransform: 'none', fontWeight: 600, ml: 'auto', '&:hover': { opacity: 0.9 } }}>Add Inquiry</Button>
      </Box>
      <Grid container spacing={3}>
        {inquiries.map((inq, idx) => (
          <Grid item xs={12} sm={6} md={3} key={idx}>
            <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ background: colors.gradient, fontWeight: 600 }}>{inq.name.split(' ').map(n => n[0]).join('')}</Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: colors.textPrimary }}>{inq.name}</Typography>
                    <Typography variant="caption" sx={{ color: colors.textMuted }}>{inq.phone}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip label={inq.course} size="small" sx={{ background: colors.infoLight, color: colors.info, fontWeight: 600, borderRadius: '8px' }} />
                  <Chip label={inq.status} size="small" sx={{ background: inq.status === 'New' ? colors.infoLight : inq.status === 'Follow-up' ? colors.warningLight : colors.successLight, color: inq.status === 'New' ? colors.info : inq.status === 'Follow-up' ? colors.warning : colors.success, fontWeight: 600, borderRadius: '8px' }} />
                </Box>
                <Typography variant="caption" sx={{ color: colors.textMuted, mt: 1.5, display: 'block' }}>Inquired: {inq.date}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

// ============ Teacher Timetable Page ============
export const TeacherTimetable = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Timetable Management" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Timetable', path: '/teacher/timetable' }]} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ background: colors.gradient, borderRadius: '10px', textTransform: 'none', fontWeight: 600, '&:hover': { opacity: 0.9 } }}>Add Schedule</Button>
      </Box>
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Day</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Time</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Subject</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Batch</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Room</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { day: 'Monday', time: '8:00-9:00', subject: 'Mathematics', batch: 'Morning', room: '101' },
                { day: 'Monday', time: '10:30-11:30', subject: 'Chemistry', batch: 'Morning', room: '102' },
                { day: 'Tuesday', time: '9:15-10:15', subject: 'Physics', batch: 'Evening', room: '201' },
                { day: 'Wednesday', time: '8:00-9:00', subject: 'Mathematics', batch: 'Morning', room: '101' },
              ].map((s, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{s.day}</TableCell>
                  <TableCell>{s.time}</TableCell>
                  <TableCell>{s.subject}</TableCell>
                  <TableCell><Chip label={s.batch} size="small" sx={{ borderRadius: '8px', background: colors.infoLight, color: colors.info, fontWeight: 600 }} /></TableCell>
                  <TableCell>Room {s.room}</TableCell>
                  <TableCell>
                    <IconButton size="small" sx={{ color: colors.warning }}><EditIcon fontSize="small" /></IconButton>
                    <IconButton size="small" sx={{ color: colors.error }}><DeleteIcon fontSize="small" /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardLayout>
  );
};

// ============ Teacher Assignments Page ============
export const TeacherAssignments = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Assignment Management" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Assignments', path: '/teacher/assignments' }]} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ background: colors.gradient, borderRadius: '10px', textTransform: 'none', fontWeight: 600, '&:hover': { opacity: 0.9 } }}>Upload Assignment</Button>
      </Box>
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Subject</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Batch</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Due Date</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Submissions</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Status</TableCell>
                <TableCell sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { title: 'Calculus Assignment 3', subject: 'Mathematics', batch: 'Morning', due: '2024-03-20', submitted: 22, total: 32, status: 'Active' },
                { title: 'Thermodynamics Problems', subject: 'Physics', batch: 'Evening', due: '2024-03-22', submitted: 15, total: 28, status: 'Active' },
                { title: 'Organic Chem Worksheet', subject: 'Chemistry', batch: 'Morning', due: '2024-03-25', submitted: 0, total: 32, status: 'Upcoming' },
              ].map((a, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{a.title}</TableCell>
                  <TableCell>{a.subject}</TableCell>
                  <TableCell><Chip label={a.batch} size="small" sx={{ borderRadius: '8px', background: colors.infoLight, color: colors.info, fontWeight: 600 }} /></TableCell>
                  <TableCell>{a.due}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: a.submitted > 0 ? colors.success : colors.textMuted }}>{a.submitted}/{a.total}</Typography>
                    <LinearProgress variant="determinate" value={(a.submitted / a.total) * 100} sx={{ height: 4, borderRadius: '2px', mt: 0.5, '& .MuiLinearProgress-bar': { background: colors.gradient } }} />
                  </TableCell>
                  <TableCell>
                    <Chip label={a.status} size="small" sx={{ background: a.status === 'Active' ? colors.infoLight : colors.warningLight, color: a.status === 'Active' ? colors.info : colors.warning, fontWeight: 600, borderRadius: '8px' }} />
                  </TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined" sx={{ borderRadius: '8px', textTransform: 'none', borderColor: colors.border, color: colors.accent }}>Review</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardLayout>
  );
};

// ============ Teacher Notes Page ============
export const TeacherNotes = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Notes Management" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Notes', path: '/teacher/notes' }]} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ background: colors.gradient, borderRadius: '10px', textTransform: 'none', fontWeight: 600, '&:hover': { opacity: 0.9 } }}>Upload Notes</Button>
      </Box>
      <Grid container spacing={3}>
        {[
          { title: 'Calculus Quick Reference', subject: 'Mathematics', batch: 'All', pages: 12, uploaded: '2024-03-01', downloads: 45 },
          { title: 'Thermodynamics Notes', subject: 'Physics', batch: 'Morning', pages: 8, uploaded: '2024-02-28', downloads: 32 },
          { title: 'Organic Chemistry Reactions', subject: 'Chemistry', batch: 'All', pages: 15, uploaded: '2024-02-25', downloads: 58 },
        ].map((note, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <Box sx={{ background: colors.gradient, p: 2, display: 'flex', alignItems: 'center', gap: 1.5, borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                <NoteAltIcon sx={{ color: colors.white }} />
                <Typography variant="subtitle2" sx={{ color: colors.white, fontWeight: 600 }}>{note.subject}</Typography>
              </Box>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textPrimary, mb: 1 }}>{note.title}</Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Chip label={note.batch} size="small" sx={{ borderRadius: '8px', background: colors.infoLight, color: colors.info, fontWeight: 600 }} />
                  <Chip label={`${note.pages} pages`} size="small" variant="outlined" sx={{ borderRadius: '8px' }} />
                </Box>
                <Typography variant="body2" sx={{ color: colors.textMuted, mb: 1 }}>Uploaded: {note.uploaded} · {note.downloads} downloads</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button size="small" variant="contained" startIcon={<DownloadIcon />} sx={{ background: colors.gradient, borderRadius: '8px', textTransform: 'none', fontWeight: 600, '&:hover': { opacity: 0.9 } }}>Download</Button>
                  <IconButton size="small" sx={{ color: colors.warning }}><EditIcon fontSize="small" /></IconButton>
                  <IconButton size="small" sx={{ color: colors.error }}><DeleteIcon fontSize="small" /></IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

// ============ Teacher Tests Page ============
export const TeacherTests = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Test Management" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Tests', path: '/teacher/tests' }]} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ background: colors.gradient, borderRadius: '10px', textTransform: 'none', fontWeight: 600, '&:hover': { opacity: 0.9 } }}>Create Test</Button>
      </Box>
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {['Test Name', 'Subject', 'Batch', 'Date', 'Marks', 'Students', 'Status', 'Actions'].map(h => (
                  <TableCell key={h} sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { name: 'Mock Test 1', subject: 'Mathematics', batch: 'Morning', date: '2024-03-01', marks: 100, students: 30, status: 'Completed' },
                { name: 'Weekly Test 4', subject: 'Physics', batch: 'Evening', date: '2024-03-08', marks: 50, students: 28, status: 'Completed' },
                { name: 'Mock Test 2', subject: 'Chemistry', batch: 'Morning', date: '2024-03-22', marks: 100, students: 0, status: 'Upcoming' },
              ].map((t, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{t.name}</TableCell>
                  <TableCell>{t.subject}</TableCell>
                  <TableCell><Chip label={t.batch} size="small" sx={{ borderRadius: '8px', background: colors.infoLight, color: colors.info, fontWeight: 600 }} /></TableCell>
                  <TableCell>{t.date}</TableCell>
                  <TableCell>{t.marks}</TableCell>
                  <TableCell>{t.students > 0 ? t.students : '-'}</TableCell>
                  <TableCell>
                    <Chip label={t.status} size="small" sx={{ background: t.status === 'Completed' ? colors.successLight : colors.infoLight, color: t.status === 'Completed' ? colors.success : colors.info, fontWeight: 600, borderRadius: '8px' }} />
                  </TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined" sx={{ borderRadius: '8px', textTransform: 'none', borderColor: colors.border, color: colors.accent }}>Manage</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardLayout>
  );
};

// ============ Teacher Results Page ============
export const TeacherResults = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Result Management" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Results', path: '/teacher/results' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {['Student', 'Test', 'Subject', 'Score', 'Total', 'Percentage', 'Rank', 'Remarks'].map(h => (
                  <TableCell key={h} sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { student: 'Rahul Kumar', test: 'Mock Test 1', subject: 'Mathematics', score: 78, total: 100, rank: 12 },
                { student: 'Priya Sharma', test: 'Mock Test 1', subject: 'Mathematics', score: 85, total: 100, rank: 8 },
                { student: 'Ananya Patel', test: 'Mock Test 1', subject: 'Physics', score: 72, total: 100, rank: 18 },
                { student: 'Rohit Singh', test: 'Mock Test 1', subject: 'Chemistry', score: 90, total: 100, rank: 5 },
              ].map((r, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{r.student}</TableCell>
                  <TableCell>{r.test}</TableCell>
                  <TableCell>{r.subject}</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{r.score}</TableCell>
                  <TableCell>{r.total}</TableCell>
                  <TableCell>
                    <Chip label={`${Math.round((r.score / r.total) * 100)}%`} size="small" sx={{ background: (r.score / r.total) >= 0.75 ? colors.successLight : colors.warningLight, color: (r.score / r.total) >= 0.75 ? colors.success : colors.warning, fontWeight: 600, borderRadius: '8px' }} />
                  </TableCell>
                  <TableCell>{r.rank}</TableCell>
                  <TableCell>
                    <TextField size="small" placeholder="Add remark..." variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', fontSize: '0.8rem' } }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardLayout>
  );
};

// ============ Teacher Progress Page ============
export const TeacherProgress = () => {
  const students = [
    { name: 'Rahul Kumar', math: 78, physics: 72, chemistry: 85, overall: 78.3, trend: 'up' },
    { name: 'Priya Sharma', math: 85, physics: 80, chemistry: 82, overall: 82.3, trend: 'up' },
    { name: 'Ananya Patel', math: 62, physics: 68, chemistry: 70, overall: 66.7, trend: 'down' },
    { name: 'Rohit Singh', math: 90, physics: 85, chemistry: 88, overall: 87.7, trend: 'up' },
  ];

  return (
    <DashboardLayout>
      <PageHeader title="Student Progress Tracking" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Progress', path: '/teacher/progress' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {['Student', 'Mathematics', 'Physics', 'Chemistry', 'Overall', 'Trend', 'Status'].map(h => (
                  <TableCell key={h} sx={{ fontWeight: 700, color: colors.textPrimary, bgcolor: colors.offWhite }}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((s, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ fontWeight: 600, color: colors.textPrimary }}>{s.name}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{s.math}%</Typography>
                      <LinearProgress variant="determinate" value={s.math} sx={{ width: 60, height: 5, borderRadius: '3px', '& .MuiLinearProgress-bar': { background: s.math >= 75 ? colors.gradient : s.math >= 60 ? `linear-gradient(135deg, ${colors.warning}, #ff9800)` : `linear-gradient(135deg, ${colors.error}, #ef5350)` } }} />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{s.physics}%</Typography>
                      <LinearProgress variant="determinate" value={s.physics} sx={{ width: 60, height: 5, borderRadius: '3px', '& .MuiLinearProgress-bar': { background: s.physics >= 75 ? colors.gradient : colors.warning } }} />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>{s.chemistry}%</Typography>
                      <LinearProgress variant="determinate" value={s.chemistry} sx={{ width: 60, height: 5, borderRadius: '3px', '& .MuiLinearProgress-bar': { background: s.chemistry >= 75 ? colors.gradient : colors.warning } }} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 700, color: s.overall >= 75 ? colors.success : s.overall >= 60 ? colors.warning : colors.error }}>{s.overall}%</TableCell>
                  <TableCell>
                    <Chip label={s.trend === 'up' ? 'Improving' : 'Needs Work'} size="small" sx={{ background: s.trend === 'up' ? colors.successLight : colors.errorLight, color: s.trend === 'up' ? colors.success : colors.error, fontWeight: 600, borderRadius: '8px' }} />
                  </TableCell>
                  <TableCell>
                    <Button size="small" variant="outlined" sx={{ borderRadius: '8px', textTransform: 'none', borderColor: colors.border, color: colors.accent }}>View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </DashboardLayout>
  );
};

// ============ Teacher Notices Page ============
export const TeacherNotices = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Notice Board" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Notices', path: '/teacher/notices' }]} />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ background: colors.gradient, borderRadius: '10px', textTransform: 'none', fontWeight: 600, '&:hover': { opacity: 0.9 } }}>Add Notice</Button>
      </Box>
      {[
        { title: 'Summer Vacation Schedule', content: 'Summer break will start from May 1st to June 15th.', date: '2024-03-15', type: 'Important', target: 'All Students' },
        { title: 'Mock Test Schedule', content: 'Next round of mock tests for JEE Advanced will be held on March 25th and 26th.', date: '2024-03-12', type: 'Exam', target: 'JEE Batch' },
        { title: 'Parent-Teacher Meeting', content: 'PTM scheduled for March 30th from 10 AM to 2 PM.', date: '2024-03-10', type: 'Event', target: 'All Parents' },
      ].map((notice, idx) => (
        <Card key={idx} sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', mb: 2 }}>
          <CardContent sx={{ p: 3, display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Avatar sx={{ background: notice.type === 'Important' ? colors.errorLight : notice.type === 'Exam' ? colors.warningLight : colors.infoLight, color: notice.type === 'Important' ? colors.error : notice.type === 'Exam' ? colors.warning : colors.info }}><CampaignIcon /></Avatar>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: colors.textPrimary }}>{notice.title}</Typography>
                  <Typography variant="body2" sx={{ color: colors.textSecondary, mt: 0.5 }}>{notice.content}</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip label={notice.type} size="small" sx={{ background: notice.type === 'Important' ? colors.errorLight : notice.type === 'Exam' ? colors.warningLight : colors.infoLight, color: notice.type === 'Important' ? colors.error : notice.type === 'Exam' ? colors.warning : colors.info, fontWeight: 600, borderRadius: '8px' }} />
                  <IconButton size="small" sx={{ color: colors.warning }}><EditIcon fontSize="small" /></IconButton>
                  <IconButton size="small" sx={{ color: colors.error }}><DeleteIcon fontSize="small" /></IconButton>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <Typography variant="caption" sx={{ color: colors.textMuted }}>Target: {notice.target}</Typography>
                <Typography variant="caption" sx={{ color: colors.textMuted }}>{notice.date}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </DashboardLayout>
  );
};

// ============ Teacher Messages Page ============
export const TeacherMessages = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Messages" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Messages', path: '/teacher/messages' }]} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 2, px: 1 }}>Conversations</Typography>
              {['Rahul Kumar', 'Priya Sharma', 'Ananya Patel', 'Rohit Singh'].map((name, idx) => (
                <Paper key={idx} variant="outlined" sx={{ p: 1.5, mb: 1, borderRadius: '12px', borderColor: idx === 0 ? colors.accent : colors.border, bgcolor: idx === 0 ? colors.infoLight : 'transparent', cursor: 'pointer', '&:hover': { bgcolor: colors.offWhite } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar sx={{ width: 36, height: 36, background: colors.gradient, fontSize: '0.8rem', fontWeight: 600 }}>{name.split(' ').map(n => n[0]).join('')}</Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: colors.textPrimary }}>{name}</Typography>
                      <Typography variant="caption" sx={{ color: colors.textMuted }}>Last message 1h ago</Typography>
                    </Box>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: idx === 0 ? colors.success : 'transparent' }} />
                  </Box>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, pb: 2, borderBottom: `1px solid ${colors.border}` }}>
                <Avatar sx={{ background: colors.gradient, fontWeight: 600 }}>RK</Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.textPrimary }}>Rahul Kumar</Typography>
                  <Typography variant="caption" sx={{ color: colors.textMuted }}>Student · Class 12th</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3, maxHeight: 300, overflow: 'auto' }}>
                <Paper variant="outlined" sx={{ p: 2, borderRadius: '12px', maxWidth: '70%', alignSelf: 'flex-end', bgcolor: colors.infoLight, borderColor: colors.accent }}>
                  <Typography variant="body2">Good morning sir! Could you please clarify the doubt from yesterday's class?</Typography>
                  <Typography variant="caption" sx={{ color: colors.textMuted, mt: 0.5, display: 'block' }}>10:15 AM</Typography>
                </Paper>
                <Paper variant="outlined" sx={{ p: 2, borderRadius: '12px', maxWidth: '70%', alignSelf: 'flex-start', bgcolor: colors.offWhite, borderColor: colors.border }}>
                  <Typography variant="body2">Good morning! Sure, please share which topic you need clarification on.</Typography>
                  <Typography variant="caption" sx={{ color: colors.textMuted, mt: 0.5, display: 'block' }}>10:20 AM</Typography>
                </Paper>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField fullWidth placeholder="Type your message..." variant="outlined" size="small" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
                <Button variant="contained" sx={{ background: colors.gradient, borderRadius: '12px', minWidth: '48px', '&:hover': { opacity: 0.9 } }}><SendIcon /></Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

// ============ Teacher Profile Page ============
export const TeacherProfile = () => {
  return (
    <DashboardLayout>
      <PageHeader title="My Profile" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Profile', path: '/teacher/profile' }]} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <Box sx={{ background: colors.gradient, p: 4, textAlign: 'center', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
              <Avatar sx={{ width: 96, height: 96, mx: 'auto', mb: 2, border: '3px solid rgba(255,255,255,0.3)', bgcolor: colors.accentLight, color: colors.primaryDark, fontWeight: 700, fontSize: '2rem' }}>AS</Avatar>
              <Typography variant="h5" sx={{ color: colors.white, fontWeight: 700 }}>Dr. Amit Sharma</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Teacher ID: TCH001</Typography>
            </Box>
            <CardContent sx={{ p: 3, textAlign: 'center' }}>
              <Chip label="Mathematics Department" sx={{ background: colors.infoLight, color: colors.info, fontWeight: 600, borderRadius: '8px' }} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 3 }}>Personal Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Full Name</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>Dr. Amit Sharma</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Email</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>amit.sharma@excelcoaching.com</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Phone</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>+91 98765 00001</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Department</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>Mathematics</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Experience</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>12 Years</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ color: colors.textMuted, fontWeight: 600, mb: 0.5, display: 'block' }}>Qualification</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>Ph.D. (Mathematics), IIT Bombay</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

// ============ Teacher Settings Page ============
export const TeacherSettings = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Settings" breadcrumbs={[{ label: 'Dashboard', path: '/teacher/dashboard' }, { label: 'Settings', path: '/teacher/settings' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 3 }}>Account Settings</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Full Name" defaultValue="Dr. Amit Sharma" variant="outlined" size="medium" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" defaultValue="amit.sharma@excelcoaching.com" variant="outlined" size="medium" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Phone" defaultValue="+91 98765 00001" variant="outlined" size="medium" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Address" defaultValue="Mumbai" variant="outlined" size="medium" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
            </Grid>
          </Grid>
          <Button variant="contained" sx={{ mt: 3, background: colors.gradient, borderRadius: '12px', px: 4, py: 1.2, fontWeight: 600, textTransform: 'none', '&:hover': { opacity: 0.9 } }}>
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

// ============ Contact Page (Public) ============
export const Contact = () => {
  return (
    <DashboardLayout>
      <PageHeader title="Contact Us" breadcrumbs={[{ label: 'Contact', path: '/contact' }]} />
      <Card sx={{ borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 3 }}>Institute Contact Information</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" sx={{ color: colors.textMuted, mb: 1 }}>Address</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>123, Education Hub, Near Central Mall, Mumbai - 400001</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" sx={{ color: colors.textMuted, mb: 1 }}>Phone</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>+91 98765 43210</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body2" sx={{ color: colors.textMuted, mb: 1 }}>Email</Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: colors.textPrimary }}>info@excelcoaching.com</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};