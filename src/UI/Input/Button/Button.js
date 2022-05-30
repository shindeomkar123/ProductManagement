import Button from "@mui/material/Button";

const ButtonComponent = ({ children, clickHandler, disabled }) => {
  return (
    <Button
      variant="contained"
      style={{ textTransform: "none" }}
      onClick={clickHandler}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
