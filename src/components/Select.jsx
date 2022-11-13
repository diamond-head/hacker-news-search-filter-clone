import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import MuiInputLabel from "@mui/material/InputLabel";
import MuiSelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MuiFormControl from "@mui/material/FormControl";

const InputLabel = styled(MuiInputLabel)(() => ({}));
const Select = styled(MuiSelect)(() => ({}));

export default function _Select({
  id,
  onSelectValueChange,
  label = "",
  placeholder = "",
  options = [],
  defaultValue = "",
}) {
  const [inputValue, setInputValue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onSelectValueChange(event.target.value, id);
  };

  return (
    <MuiBox sx={{ minWidth: 120 }}>
      <MuiFormControl variant="standard" fullWidth size="small">
        <InputLabel shrink={true} id="select-label">
          {placeholder}
        </InputLabel>
        <Select
          labelId="select-label"
          id="custom-select"
          value={inputValue}
          label={label}
          onChange={handleChange}
        >
          {options.map((i, idx) => (
            <MenuItem key={idx + "" + i.value} value={i.value}>
              {i.text}
            </MenuItem>
          ))}
        </Select>
      </MuiFormControl>
    </MuiBox>
  );
}
