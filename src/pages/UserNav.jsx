/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import Check from "@mui/icons-material/Check";
import CheckIcon from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
// import useCustomFetch from "../Hooks/useCustomFetch";
import Displayone from "./UserNav/Displayone";
import Displaytwo from "./UserNav/Displaytwo";
import Displaythree from "./UserNav/Displaythree";
import Displayfour from "./UserNav/Displayfour";
import Displayfive from "./UserNav/Displayfive";
import Displaysix from "./UserNav/Displaysix";
import Displayseven from "./UserNav/Displayseven";
import useCustomFetch from "../Hooks/useCustomFetch";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#82CC52",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#82CC52",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#ccc",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#82CC52",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#82CC52",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <CheckIcon />,
    2: <CheckIcon />,
    3: <CheckIcon />,
    4: <CheckIcon />,
    5: <CheckIcon />,
    6: <CheckIcon />,
    7: <CheckIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  // eslint-disable-next-line react/require-default-props
  active: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  // eslint-disable-next-line react/require-default-props
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  // eslint-disable-next-line react/require-default-props
  icon: PropTypes.node,
};

const steps = [
  "STEP 01",
  "STEP 02",
  "STEP 03",
  "STEP 04",
  "STEP 05",
  "STEP 06",
  "STEP 07",
];

function App() {
  const [activecount, setActivecount] = React.useState(-1);
  const location = useLocation();
  const token = `${location.state.token}`;
  // eslint-disable-next-line no-unused-vars
  const { REACT_APP_FAKE_API } = process.env;
  const { data, loading, error } = useCustomFetch({
    url: `${REACT_APP_FAKE_API}/user/progressBar`,
    method: "GET",
    headers: {
      Token: `Bearer ${token}`,
    },
  });

  // eslint-disable-next-line consistent-return
  const display = (active) => {
    // eslint-disable-next-line default-case
    switch (active) {
      case 0:
        return <Displayone />;
      case 1:
        return <Displaytwo />;
      case 2:
        return <Displaythree />;
      case 3:
        return <Displayfour token={token} />;
      case 4:
        return <Displayfive token={token} />;
      case 5:
        return <Displaysix />;
      case 6:
        return <Displayseven />;
    }
  };

  useEffect(() => {
    if (data) {
      let count = 0;
      let ifthree = 0;
      let ifsix = 0;
      const keys = Object.keys(data);

      keys.forEach((key, index) => {
        if (
          index !== 0 &&
          index !== 3 &&
          index !== 4 &&
          index !== 7 &&
          index !== 8
        ) {
          if (data[key] === true) {
            count += 1;
          }
        }
        if (index === 3) {
          if (data[key] === true) {
            ifthree = 1;
          }
        }
        if (index === 4) {
          if (data[key] === true && ifthree === 1) {
            count += 2;
          }
        }
        if (index === 6) {
          if (data[key] === true) {
            ifsix = 1;
          }
        }
        if (index === 7) {
          if (data[key] === true && ifsix === 1) {
            count += 1;
          }
        }
      });
      //  console.log(count,"aaaaaaaaaa")
      setActivecount(count - 1);
    }
  }, [data, activecount]);

  if (error) return <h1>Error..</h1>;
  if (loading) return <h1>loading...</h1>;

  return (
    <Stack sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel
        activeStep={activecount}
        connector={<ColorlibConnector />}
        sx={{ width: "60%", marginLeft: "19%", marginTop: "2%" }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {display(activecount)}
    </Stack>
  );
}

export default App;
