import { TextField } from "@mui/material";

const Input = ({
  label,
  type,
  width,
  disabled,
  inputChangeHandler,
  blurHandler,
  value,
  error,
  helperText

}) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      type={type}
      disabled={disabled}
      size="small"
      value={value}
      error={error}
      onChange={inputChangeHandler}
      onBlur={blurHandler}
      helperText={helperText}

    />
  );
};

export default Input;
