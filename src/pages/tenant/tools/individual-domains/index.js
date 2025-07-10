<<<<<<< HEAD:src/pages/tenant/standards/individual-domains/index.js
import { Box, Container, Grid } from "@mui/material";
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippDomainCards } from "../../../../components/CippCards/CippDomainCards";

const Page = () => {
  const pageTitle = "Deploy Named Locations";

  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 4,
      }}
    >
      <Container maxWidth={false}>
        <CippDomainCards />
      </Container>
    </Box>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
=======
import { Box, Container } from "@mui/material";
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippDomainCards } from "../../../../components/CippCards/CippDomainCards";

const Page = () => {
  const pageTitle = "Deploy Named Locations";

  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 4,
      }}
    >
      <Container maxWidth={false}>
        <CippDomainCards />
      </Container>
    </Box>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c:src/pages/tenant/tools/individual-domains/index.js
