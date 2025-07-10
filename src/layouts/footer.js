<<<<<<< HEAD
import { Box, Container, Divider, Typography } from "@mui/material";

export const Footer = () => {

  //randomize the order of the sponsor images

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          py: 1,
          "& a": {
            mt: {
              xs: 1,
              sm: 0,
            },
            "&:not(:last-child)": {
              mr: {
                xs: 0,
                sm: 2,
              },
            },
          },
        }}
      ></Container>
    </div>
  );
};
=======
import { Container } from "@mui/material";

export const Footer = () => {

  //randomize the order of the sponsor images

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          py: 1,
          "& a": {
            mt: {
              xs: 1,
              sm: 0,
            },
            "&:not(:last-child)": {
              mr: {
                xs: 0,
                sm: 2,
              },
            },
          },
        }}
      ></Container>
    </div>
  );
};
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
