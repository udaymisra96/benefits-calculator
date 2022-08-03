import { Button, Card, CardContent, CardActions, Typography, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import questions from '../../Assets/questions';

const StyledTypography = styled(Typography)`
  color: #c6252b;
  height: 24px;
`;

const Disclaimer = ({ formData, handleCheckboxChange }) => {
  const [buttonWasClicked, setButtonWasClicked] = useState(false);
  
  let navigate = useNavigate();

  const handleContinueButtonClick = (event) => {
    event.preventDefault();
    setButtonWasClicked(true);
    if (formData.agreeToTermsOfService === true) {
      navigate('/step-2');
    }
  }

  return (
    <div className='benefits-form'>
      <p className='step-progress-title'>Step 1 of { questions.length + 1 }</p>
      <h2 className='sub-header'>What you should know before we begin:</h2>
      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h6'>
            Gary Community Ventures Disclaimer for Public Benefit Program Screening
          </Typography>
          <Typography variant='body1'>
            GCV's Benefit Calculator is a tool that recommends public benefits programs for you to consider based upon 
            information you provide about your household and publicly available information regarding programs you may be eligible for. 
            To enroll in a benefit, you will need to apply through the appropriate government agency. GCV's Benefit Calculator will tell 
            you how to apply for any benefit on this website, but cannot guarantee eligibility or acceptance into any program. The administering 
            agency will determine final eligibility upon your submission of an application for each program. The information you share for purposes 
            of the public benefits screening will be kept confidential but may be shared with a government agency to assist you in the application 
            process with your permission. 
          </Typography>
        </CardContent>  
      </Card>
      <Typography 
        color='text.secondary' 
        gutterBottom >
        Check the box below and then click the button to get started.
      </Typography>
      { buttonWasClicked && formData.agreeToTermsOfService === false && <StyledTypography> Please check the box below to continue. </StyledTypography> || <StyledTypography></StyledTypography> }
      <FormControlLabel 
        control={<Checkbox checked={formData.agreeToTermsOfService} onChange={handleCheckboxChange} />}  
        label='I have read, understand, and agree to the terms of: the GCV Disclaimer for Public Benefit Program Screening, the GCV Privacy Policy, and the GCV Benefits Calculator Terms of Use.'
        value='agreeToTermsOfService' />
      <CardActions>
        <Button
          variant='contained'
          onClick={(event) => handleContinueButtonClick(event)} >
          Continue
        </Button>
      </CardActions>
    </div>
  );
}

export default Disclaimer;