import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Checkbox,
  List,
} from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      sx={{ backgroundColor: '#2F1893', height: '100vh', paddingTop: '10%' }}
    >
      <Grid container spacing={0} columns={16} sx={{ margin: 'auto' }}>
        <Grid item md={2} lg={2}></Grid>
        <Grid item sm={8} md={5} lg={5}>
          <Box>
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '58px',
                textAlign: 'left',
                fontWeight: '700',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '2px',
                marginTop: '5%',
              }}
            >
              Generate <br /> Awesome Web <br />
              Pages
            </Typography>
            <Typography
              sx={{
                color: '#ffffff',
                fontWeight: '500',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '22px',
                textAlign: 'left',
                marginTop: '3%',
              }}
            >
              The most important part of the <br /> Startup is the samples. The
              <br />
              samples form a set of 25 usable <br />
              pages you can use as is or you can <br /> add new blocks.
            </Typography>
            <Box sx={{ display: 'flex', marginTop: '5%' }}>
              <Button
                variant="contained"
                sx={{
                  background: '#E93A7D',
                  borderRadius: '30px',
                  textTransform: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                  width: '30%',
                  height: '50px',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={2} lg={2}></Grid>

        <Grid item sm={8} md={5} lg={5}>
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '8%',
              paddingBottom: '8%',
              width: '80%',
            }}
          >
            <Typography
              sx={{
                fontSize: '42px',
                textAlign: 'center',
                color: '#1E0E62',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '700',
                letterSpacing: '2px',
              }}
            >
              Sign Up Now
            </Typography>
            <TextField
              sx={{
                marginTop: '20px',
                marginBottom: '20px',
                width: '60%',
                fontWeight: '500',
                fontFamily: 'DM Sans, sans-serif',
                '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                  borderRadius: '20px',
                },
                '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                  height: '10px',
                  fontWeight: '600',
                },
              }}
              value={email}
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.email)}
            />
            <TextField
              sx={{
                marginBottom: '20px',
                width: '60%',
                borderRadius: '20px',
                fontWeight: '500',
                fontFamily: 'DM Sans, sans-serif',
                '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                  borderRadius: '20px',
                },
                '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                  height: '10px',
                  //   color: '#15143966',
                  fontWeight: '600',
                },
              }}
              value={password}
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.password)}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: '20px',
                width: '60%',
              }}
            >
              <Checkbox
                {...label}
                defaultChecked
                size="medium"
                // color="success"
                sx={{
                  color: 'pink',
                  '&.Mui-checked': {
                    color: '#25DAC5',
                  },
                  '& .MuiIconButton-label:after': {
                    color: 'black',
                  },
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: '#15143966',
                  fontWeight: '400',
                }}
              >
                I agree to the Terms of Services.
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                width: '60%',
                borderRadius: '25px',
                height: '50px',
                backgroundColor: '#482BE7',
                marginBottom: '15px',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '500',
                textTransform: 'none',
              }}
            >
              Sign In
            </Button>
            <List sx={{ width: '60%' }}>
              <Divider sx={{ color: '#15143966' }} textAlign="center">
                or
              </Divider>
            </List>
            <Button
              variant="contained"
              sx={{
                width: '60%',
                borderRadius: '25px',
                height: '50px',
                backgroundColor: '#1DA1F2',
                marginTop: '15px',
                marginBottom: '25px',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '500',
                textTransform: 'none',
              }}
            >
              Login via Twitter
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{
                  color: '#15143966',
                  fontWeight: '500',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Do you have an Account?
              </Typography>
              <Typography
                sx={{
                  color: '#25DAC5',
                  marginLeft: '10px',
                  fontWeight: '500',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Sign In
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={2} lg={2}></Grid>
      </Grid>
    </Box>
  );
};
export default SignUpPage;
