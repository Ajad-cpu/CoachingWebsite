export const getToken = () => localStorage.getItem('token');
export const getUserRole = () => localStorage.getItem('userRole');
export const getUserData = () => {
  try {
    return JSON.parse(localStorage.getItem('userData'));
  } catch {
    return null;
  }
};

export const setAuthData = (token, role, userData) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userRole', role);
  localStorage.setItem('userData', JSON.stringify(userData));
};

export const clearAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userData');
};

export const isAuthenticated = () => {
  const token = getToken();
  return token !== null && token !== undefined && token !== '';
};

export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatTime = (time) => {
  if (!time) return '';
  return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getInitials = (name) => {
  if (!name) return '';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};