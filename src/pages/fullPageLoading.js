<<<<<<< HEAD
import { Grid } from "@mui/material";
import { Layout as DashboardLayout } from "../layouts/index.js";
import Head from "next/head.js";
import { Box, Container, Stack } from "@mui/system";
const FullPageLoading = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Devices</title>
      </Head>
      <Box
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={false}>
          <Stack spacing={6}>
            <Grid container spacing={3}>
              <Grid item style={{ display: "flex" }} xs={12} md={6}></Grid>
              Loading... #Todo: Make pretty, make it obey user settings for theme.
            </Grid>
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default FullPageLoading;
=======
import "@mui/material";
import { Layout as DashboardLayout } from "../layouts/index.js";
import Head from "next/head.js";
import { Box, Container, Stack, Grid } from "@mui/system";
const FullPageLoading = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Devices</title>
      </Head>
      <Box
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={false}>
          <Stack spacing={6}>
            <Grid container spacing={3}>
              <Grid style={{ display: "flex" }} size={{ md: 6, xs: 12 }}></Grid>
              Loading... #Todo: Make pretty, make it obey user settings for theme.
            </Grid>
          </Stack>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default FullPageLoading;
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
