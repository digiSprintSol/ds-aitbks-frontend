import Button from "@mui/material/Button";

function index({ className, children, ...props }) {
  return (
    <div>
      <Button
        className={className}
        {...props}
        variant="contained"
        sx={{
          fontFamily: "ProximaBold",
          backgroundColor: "#23A380",
          "&:hover": {
            backgroundColor: "#1F735B",
          },
        }}
      >
        {children}
      </Button>
    </div>
  );
}

export default index;
