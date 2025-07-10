<<<<<<< HEAD
import PropTypes from "prop-types";
import { CircularProgress, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ResourceLoadingRoot = styled("div")(({ theme }) => ({
  alignItems: "center",
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.neutral[900] : theme.palette.neutral[50],
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(3),
}));

export const ResourceLoading = (props) => {
  const { message, sx } = props;

  return (
    <ResourceLoadingRoot sx={sx}>
      <CircularProgress />
      {message && (
        <Typography color="text.secondary" sx={{ mt: 2 }} variant="body2">
          {message}
        </Typography>
      )}
    </ResourceLoadingRoot>
  );
};

ResourceLoading.propTypes = {
  message: PropTypes.string,
  sx: PropTypes.object,
};
=======
import PropTypes from "prop-types";
import { CircularProgress, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ResourceLoadingRoot = styled("div")(({ theme }) => ({
  alignItems: "center",
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.neutral[900] : theme.palette.neutral[50],
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(3),
}));

export const ResourceLoading = (props) => {
  const { message, sx } = props;

  return (
    <ResourceLoadingRoot sx={sx}>
      <CircularProgress />
      {message && (
        <Typography color="text.secondary" sx={{ mt: 2 }} variant="body2">
          {message}
        </Typography>
      )}
    </ResourceLoadingRoot>
  );
};

ResourceLoading.propTypes = {
  message: PropTypes.string,
  sx: PropTypes.object,
};
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
