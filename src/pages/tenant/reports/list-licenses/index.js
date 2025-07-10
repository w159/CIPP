<<<<<<< HEAD:src/pages/tenant/administration/list-licenses/index.js
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";

const Page = () => {
  const pageTitle = "Licenses Report";
  const apiUrl = "/api/ListLicenses";

  const actions = []; // No actions specified, setting to empty array

  const offCanvas = null; // No off-canvas details provided

  const simpleColumns = [
    "Tenant",
    "License",
    "CountUsed",
    "CountAvailable",
    "TotalLicenses",
    "TermInfo",
  ];

  return (
    <CippTablePage
      title={pageTitle}
      apiUrl={apiUrl}
      actions={actions}
      offCanvas={offCanvas}
      simpleColumns={simpleColumns}
    />
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
=======
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";

const Page = () => {
  const pageTitle = "Licenses Report";
  const apiUrl = "/api/ListLicenses";

  const simpleColumns = [
    "Tenant",
    "License",
    "CountUsed",
    "CountAvailable",
    "TotalLicenses",
    "TermInfo", // TODO TermInfo is not showing as a clickable json object in the table, like CApolicies does in the mfa report. IDK how to fix it. -Bobby
  ];

  return <CippTablePage title={pageTitle} apiUrl={apiUrl} simpleColumns={simpleColumns} />;
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c:src/pages/tenant/reports/list-licenses/index.js
