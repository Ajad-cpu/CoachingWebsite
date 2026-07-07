import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  TextField,
  Paper,
  IconButton,
  Rating,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ComputerIcon from '@mui/icons-material/Computer';
import ScienceIcon from '@mui/icons-material/Science';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import colors from '../utils/colors';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Expert Teachers',
      desc: 'Learn from highly qualified and experienced faculty dedicated to your success.',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      title: 'Proven Results',
      desc: 'Consistent track record of top performers in board exams and competitive tests.',
    },
    {
      icon: <GroupIcon sx={{ fontSize: 40 }} />,
      title: 'Small Batches',
      desc: 'Personalized attention with limited student batches for effective learning.',
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
      title: 'Regular Tests',
      desc: 'Weekly assessments, mock tests, and performance analysis to track progress.',
    },
  ];

  const courses = [
    { title: 'JEE Advanced', icon: <ComputerIcon />, students: 245, rating: 4.8 },
    { title: 'NEET UG', icon: <ScienceIcon />, students: 312, rating: 4.9 },
    { title: 'Foundation (8-10)', icon: <MenuBookIcon />, students: 520, rating: 4.7 },
    { title: 'Commerce (11-12)', icon: <AutoStoriesIcon />, students: 189, rating: 4.6 },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'JEE Advanced 2024 - AIR 42',
      text: 'Excel Coaching transformed my preparation. The faculty here is exceptional and the study material is top-notch.',
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      role: 'NEET 2024 - AIR 156',
      text: 'The regular mock tests and personalized feedback helped me improve consistently. Grateful to the entire team.',
      rating: 5,
    },
    {
      name: 'Ananya Patel',
      role: 'CBSE Class 12 - 98.6%',
      text: 'Best coaching institute in town! The teachers go above and beyond to ensure every student understands the concepts.',
      rating: 5,
    },
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Navbar */}
      <Box
        sx={{
          background: colors.gradient,
          py: 1.5,
          px: { xs: 2, md: 6 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SchoolIcon sx={{ color: colors.white, fontSize: 32 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff, #82b1ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Excel Coaching Institute
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/login')}
            sx={{
              color: colors.white,
              borderColor: 'rgba(255,255,255,0.5)',
              borderRadius: '10px',
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              '&:hover': { borderColor: colors.white, background: 'rgba(255,255,255,0.1)' },
            }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{
              background: colors.white,
              color: colors.primary,
              borderRadius: '10px',
              textTransform: 'none',
              fontWeight: 600,
              px: 3,
              '&:hover': { background: colors.accentLight },
            }}
          >
            Enquire Now
          </Button>
        </Box>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          background: colors.gradient,
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'rgba(130, 177, 255, 0.1)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(48, 79, 254, 0.15)',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: colors.white,
                  fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Shape Your Future With{' '}
                <Box component="span" sx={{ color: colors.accentLight }}>
                  Expert Guidance
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 400,
                  mb: 4,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.6,
                  maxWidth: '600px',
                }}
              >
                India's premier coaching institute for JEE, NEET, and Foundation courses.
                Join 10,000+ successful students who achieved their dreams with us.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{
                    background: colors.white,
                    color: colors.primary,
                    borderRadius: '12px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    '&:hover': { background: colors.accentLight, transform: 'translateY(-2px)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Get Started <ArrowForwardIcon sx={{ ml: 1 }} />
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: colors.white,
                    borderColor: 'rgba(255,255,255,0.5)',
                    borderRadius: '12px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': { borderColor: colors.white, background: 'rgba(255,255,255,0.1)' },
                  }}
                >
                  <PlayArrowIcon sx={{ mr: 1 }} /> Watch Demo
                </Button>
              </Box>
              <Box sx={{ display: 'flex', gap: 4, mt: 5, flexWrap: 'wrap' }}>
                {[
                  { value: '10,000+', label: 'Students' },
                  { value: '98%', label: 'Success Rate' },
                  { value: '50+', label: 'Expert Faculty' },
                ].map((stat) => (
                  <Box key={stat.label}>
                    <Typography variant="h4" sx={{ color: colors.white, fontWeight: 800 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                sx={{
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '24px',
                  p: 4,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <Typography variant="h5" sx={{ color: colors.white, fontWeight: 700, mb: 3, textAlign: 'center' }}>
                  Admission Inquiry
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    placeholder="Your Name"
                    variant="outlined"
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255,255,255,0.9)',
                        borderRadius: '10px',
                      },
                    }}
                  />
                  <TextField
                    placeholder="Phone Number"
                    variant="outlined"
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255,255,255,0.9)',
                        borderRadius: '10px',
                      },
                    }}
                  />
                  <TextField
                    placeholder="Course Interested In"
                    variant="outlined"
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        background: 'rgba(255,255,255,0.9)',
                        borderRadius: '10px',
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: colors.white,
                      color: colors.primary,
                      borderRadius: '10px',
                      py: 1.2,
                      fontWeight: 700,
                      textTransform: 'none',
                      '&:hover': { background: colors.accentLight },
                    }}
                  >
                    Submit Enquiry
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: colors.offWhite }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Why Choose Us"
              sx={{
                background: colors.gradient,
                color: colors.white,
                fontWeight: 600,
                px: 2,
                borderRadius: '20px',
                mb: 2,
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800, color: colors.textPrimary, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
              What Makes Us Different
            </Typography>
            <Typography variant="body1" sx={{ color: colors.textSecondary, mt: 1, maxWidth: 600, mx: 'auto' }}>
              We combine experienced faculty, comprehensive study material, and regular assessment to ensure every student excels.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(26, 35, 78, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: '18px',
                      background: colors.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      color: colors.white,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 1 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.6 }}>
                    {feature.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Courses Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: colors.white }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Our Courses"
              sx={{
                background: colors.gradient,
                color: colors.white,
                fontWeight: 600,
                px: 2,
                borderRadius: '20px',
                mb: 2,
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800, color: colors.textPrimary, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
              Popular Courses
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 12px 40px rgba(26, 35, 78, 0.12)' },
                  }}
                >
                  <Box
                    sx={{
                      background: colors.gradient,
                      p: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      color: colors.white,
                    }}
                  >
                    {React.cloneElement(course.icon, { sx: { fontSize: 56 } })}
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: colors.textPrimary, mb: 1 }}>
                      {course.title}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2" sx={{ color: colors.textMuted }}>
                        {course.students} Students
                      </Typography>
                      <Rating value={course.rating} readOnly size="small" sx={{ color: colors.warning }} />
                    </Box>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        mt: 1,
                        borderColor: colors.primary,
                        color: colors.primary,
                        borderRadius: '10px',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': { background: colors.primary, color: colors.white },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: colors.offWhite }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="Testimonials"
              sx={{
                background: colors.gradient,
                color: colors.white,
                fontWeight: 600,
                px: 2,
                borderRadius: '20px',
                mb: 2,
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800, color: colors.textPrimary, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
              What Our Students Say
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-4px)' },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 52,
                        height: 52,
                        background: colors.gradient,
                        fontWeight: 700,
                      }}
                    >
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: colors.textPrimary }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: colors.accent, fontWeight: 500 }}>
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Rating value={testimonial.rating} readOnly size="small" sx={{ mb: 1.5, color: colors.warning }} />
                  <Typography variant="body2" sx={{ color: colors.textSecondary, lineHeight: 1.7 }}>
                    "{testimonial.text}"
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Teacher Highlight */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: colors.gradient }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  height: 400,
                  borderRadius: '24px',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <SchoolIcon sx={{ fontSize: 120, color: 'rgba(255,255,255,0.3)' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: colors.white, mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
                Meet Our Expert Faculty
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, lineHeight: 1.8 }}>
                Our team of highly qualified teachers brings decades of experience and a passion for teaching.
                Each faculty member is dedicated to nurturing talent and helping students achieve their full potential.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                {['IIT Alumni', 'PhD Scholars', '10+ Yrs Exp', 'Award Winning'].map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    sx={{
                      background: 'rgba(255,255,255,0.15)',
                      color: colors.white,
                      fontWeight: 500,
                      borderRadius: '20px',
                    }}
                  />
                ))}
              </Box>
              <Button
                variant="contained"
                sx={{
                  background: colors.white,
                  color: colors.primary,
                  borderRadius: '12px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  textTransform: 'none',
                  '&:hover': { background: colors.accentLight },
                }}
              >
                View All Faculty
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: colors.white }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: colors.textPrimary, fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 2 }}>
              Get In Touch
            </Typography>
            <Typography variant="body1" sx={{ color: colors.textSecondary }}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </Typography>
          </Box>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: '24px',
              border: '1px solid',
              borderColor: colors.border,
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Full Name" variant="outlined" size="medium" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email Address" variant="outlined" size="medium" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone" variant="outlined" size="medium" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Subject" variant="outlined" size="medium" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Message" multiline rows={4} variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
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
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: colors.gradient,
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, color: colors.white, mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, fontWeight: 400 }}>
            Join thousands of successful students. Enroll today and take the first step towards a bright future.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/login')}
              sx={{
                background: colors.white,
                color: colors.primary,
                borderRadius: '12px',
                px: 5,
                py: 1.5,
                fontWeight: 700,
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': { background: colors.accentLight },
              }}
            >
              Login Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: colors.white,
                borderColor: 'rgba(255,255,255,0.5)',
                borderRadius: '12px',
                px: 5,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': { borderColor: colors.white, background: 'rgba(255,255,255,0.1)' },
              }}
            >
              Admission Inquiry
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ background: colors.primaryDark, py: 4, px: { xs: 2, md: 6 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <SchoolIcon sx={{ color: colors.accentLight }} />
                <Typography variant="h6" sx={{ color: colors.white, fontWeight: 700 }}>
                  Excel Coaching Institute
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: colors.gray, lineHeight: 1.7 }}>
                Empowering students with quality education and expert guidance since 2010. Your success is our mission.
              </Typography>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" sx={{ color: colors.white, fontWeight: 600, mb: 1.5 }}>
                Quick Links
              </Typography>
              {['About Us', 'Courses', 'Faculty', 'Results', 'Contact'].map((link) => (
                <Typography key={link} variant="body2" sx={{ color: colors.gray, mb: 0.8, cursor: 'pointer', '&:hover': { color: colors.accentLight } }}>
                  {link}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: colors.white, fontWeight: 600, mb: 1.5 }}>
                Courses
              </Typography>
              {['JEE Advanced', 'NEET UG', 'Foundation', 'Commerce'].map((course) => (
                <Typography key={course} variant="body2" sx={{ color: colors.gray, mb: 0.8, cursor: 'pointer', '&:hover': { color: colors.accentLight } }}>
                  {course}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle2" sx={{ color: colors.white, fontWeight: 600, mb: 1.5 }}>
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray, mb: 0.8 }}>
                📍 123, Education Hub, Mumbai
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray, mb: 0.8 }}>
                📞 +91 98765 43210
              </Typography>
              <Typography variant="body2" sx={{ color: colors.gray, mb: 0.8 }}>
                ✉️ info@excelcoaching.com
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 3, pt: 3, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: colors.gray }}>
              © 2024 Excel Coaching Institute. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Landing;