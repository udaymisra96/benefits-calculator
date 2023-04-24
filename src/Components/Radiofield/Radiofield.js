import {FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FormattedMessage, useIntl } from 'react-intl';
import './Radiofield.css';

const StyledFormControlLabel = styled(FormControlLabel)({
  marginLeft: -5
});

const Radiofield = ({ componentDetails, formData, handleRadioButtonChange, preferNotToAnswer }) => {
  const { ariaLabel, inputName } = componentDetails;
  const intl = useIntl();
  const translatedAriaLabel = intl.formatMessage({ id: ariaLabel });
  console.log(formData[inputName]);
  
  return (
    <div className='radiogroup-container'>
      <RadioGroup
        aria-labelledby={translatedAriaLabel}
        name={inputName}
        value={formData[inputName]}
        onChange={handleRadioButtonChange} >
          <StyledFormControlLabel 
            value='true' 
            control={<Radio />} 
            label={
              <FormattedMessage 
                id='radiofield.label-yes' 
                defaultMessage='Yes' />
            }
          />
          <StyledFormControlLabel 
            value='false' 
            control={<Radio />} 
            label={
              <FormattedMessage 
                id='radiofield.label-no' 
                defaultMessage='No' />
            }
          />
          { preferNotToAnswer && (
            <StyledFormControlLabel 
              value='preferNotToAnswer' 
              control={<Radio />} 
              label={
                <FormattedMessage 
                  id='radiofield.label-no' 
                  defaultMessage='No' />
              }
            />
          )}
      </RadioGroup>
    </div>
  );
}

export default Radiofield;