import { Box, Button, Typography } from '@mui/material';
import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingSteps: FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (): void => {
    activeStep < 2 ? setActiveStep((prevActiveStep) => prevActiveStep + 1) : navigate('/login');
  };

  const steps = [
    {
      img: "url('./onboarding1.png')",
      title: 'Tons of furniture collections',
      slider: './Slider-Group-1.svg'
    },
    {
      img: "url('./onboarding2.png')",
      title: 'Fast deliveries to your doorstep',
      slider: './Slider-Group-2.svg'
    },
    {
      img: "url('./onboarding3.png')",
      title: 'Bring aesthetics to your home',
      slider: './Slider-Group-3.svg'
    }
  ];

  return (
    <Box
      sx={{
        backgroundImage: steps[activeStep].img,
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        pt: 5,
        pb: 4,
        px: 2
      }}>
      <img
        style={{
          marginTop: '0.75rem',
          height: '2.75rem'
        }}
        src="./Umah-Logo.svg"
        alt=""
      />
      <Box
        sx={{
          backgroundImage: "url('./Fader.svg')",
          height: '50vh',
          width: '100vw',
          maxWidth: 'mobile',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2, pb: 4 }}>
          <Box textAlign="center" marginBottom={2}>
            <Typography variant="fs20" sx={{ fontWeight: 'bold', color: 'white', pb: 0.75 }}>
              {steps[activeStep].title}
            </Typography>
            <Typography variant="fs12" color="rgba(255, 255, 255, 0.6)" paddingX={6}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </Typography>
          </Box>
          <img src={steps[activeStep].slider} alt="" />
        </Box>
        <Box sx={{ width: '100%', px: 2 }}>
          <Button variant="contained" fullWidth sx={{ py: 2.5 }} onClick={handleNext}>
            {activeStep === 2 ? 'Log In' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingSteps;
