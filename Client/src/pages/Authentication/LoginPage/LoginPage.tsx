import { Box, Link, Divider, Typography } from '@mui/material';
import { type FC } from 'react';
import LoginHeader from './partials/LoginHeader';
import LoginForm from './partials/LoginForm';
import LoginOptions from './partials/LoginOptions';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage: FC = () => {
  return (
    <Box>
      <LoginHeader />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, px: 2, py: 4 }}>
        <LoginForm />
        <Divider sx={{ fontSize: '0.75rem', fontWeight: 500, color: 'neutral.greyBlue' }}>
          Or log in with
        </Divider>
        <LoginOptions />
        <Typography
          variant="fs12"
          sx={{
            fontWeight: 500,
            color: 'neutral.greyBlue',
            textAlign: 'center'
          }}>
          Don&apos;t have an accout?
          <Link component={RouterLink} to="/register" paddingLeft={0.5}>
            Register
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
