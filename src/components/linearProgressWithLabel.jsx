<<<<<<< HEAD
import { Box, LinearProgress, Typography } from "@mui/material";

export const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>{`${Math.round(props.value)}%`}</Box>
    </Box>
  );
};
=======
import { Box, LinearProgress } from "@mui/material";

export const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 135 }}>{`${Math.round(props.value)}% ${props?.addedLabel ?? ""}`}</Box>
    </Box>
  );
};
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
