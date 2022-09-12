import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledSelectfield = styled(Select)({
  marginBottom: 20,
  minWidth: 200
});

const BasicSelect = ({ componentProperties, setFormData, formData, options, formDataProperty }) => {
  const { labelId, inputLabelText, id, value, label, disabledSelectMenuItemText } = componentProperties;

  const handleBasicSelect = (event, formProperty) => {
    setFormData({ ...formData, [formProperty]: event.target.value });
  }

  const createMenuItems = () => {
    const disabledSelectMenuItem = <MenuItem value='disabled-select' key='disabled-select' disabled>{disabledSelectMenuItemText}</MenuItem>
    const menuItemKeys = Object.keys(options);
    const menuItemLabels = Object.values(options);
    
    const dropdownMenuItems = menuItemKeys.map((option, i) => {
      return (
        <MenuItem value={option} key={option}>{menuItemLabels[i]}</MenuItem>
      );
    });
    
    return [disabledSelectMenuItem, dropdownMenuItems];
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={labelId}>{inputLabelText}</InputLabel>
      <StyledSelectfield
        labelId={labelId}
        id={id}
        value={formData[value]}
        label={label}
        onChange={(event) => { handleBasicSelect(event, formDataProperty) }}
      >
      { createMenuItems() }
      </StyledSelectfield>
    </FormControl>
  );
}

export default BasicSelect;