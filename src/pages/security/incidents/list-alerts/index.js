<<<<<<< HEAD
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";

const Page = () => {
  const pageTitle = "Alerts List";

  // Define actions for alerts
  const actions = [
    {
      label: "Set status to in progress",
      type: "POST",
      url: "/api/ExecSetSecurityAlert",
      data: {
        TenantFilter: "Tenant",
        GUID: "id",
        Status: "inProgress",
        Vendor: "vendorInformation.vendor",
        Provider: "vendorInformation.provider",
      },
      confirmText: "Are you sure you want to set the status to in progress?",
    },
    {
      label: "Set status to resolved",
      type: "POST",
      url: "/api/ExecSetSecurityAlert",
      data: {
        TenantFilter: "Tenant",
        GUID: "id",
        Status: "resolved",
        Vendor: "vendorInformation.vendor",
        Provider: "vendorInformation.provider",
      },
      confirmText: "Are you sure you want to set the status to resolved?",
    },
  ];

  // Define off-canvas details
  const offCanvas = {
    extendedInfoFields: [
      "eventDateTime", // Created on
      "title", // Title
      "category", // Category
      "Status", // Status
      "Severity", // Severity
      "Tenant", // Tenant
      "InvolvedUsers", // Involved Users
    ],
    actions: actions,
  };

  // Simplified columns for the table
  const simpleColumns = [
    "eventDateTime", // Created Date (Local)
    "Tenant", // Tenant
    "title", // Title
    "Severity", // Severity
    "Status", // Status
  ];

  return (
    <CippTablePage
      title={pageTitle}
      apiUrl="/api/ExecAlertsList"
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
import { Assignment, Done } from "@mui/icons-material";

const Page = () => {
  const pageTitle = "Alerts List";

  // Define actions for alerts
  const actions = [
    {
      label: "Set status to in progress",
      type: "POST",
      icon: <Assignment />,
      url: "/api/ExecSetSecurityAlert",
      data: {
        GUID: "Id",
        Status: "!inProgress",
        Vendor: "RawResult.vendorInformation.vendor",
        Provider: "RawResult.vendorInformation.provider",
      },
      confirmText: "Are you sure you want to set the status to in progress?",
    },
    {
      label: "Set status to resolved",
      type: "POST",
      icon: <Done />,
      url: "/api/ExecSetSecurityAlert",
      data: {
        GUID: "Id",
        Status: "!resolved",
        Vendor: "RawResult.vendorInformation.vendor",
        Provider: "RawResult.vendorInformation.provider",
      },
      confirmText: "Are you sure you want to set the status to resolved?",
    },
  ];

  // Define off-canvas details
  const offCanvas = {
    extendedInfoFields: [
      "EventDateTime", // Created on
      "Title", // Title
      "Category", // Category
      "Status", // Status
      "Severity", // Severity
      "Tenant", // Tenant
      "InvolvedUsers", // Involved Users
    ],
    actions: actions,
  };

  // Simplified columns for the table
  const simpleColumns = [
    "EventDateTime", // Created Date (Local)
    "Status", // Status
    "Title", // Title
    "Severity", // Severity
    "Category", // Category
    "Tenant", // Tenant
  ];

  return (
    <CippTablePage
      title={pageTitle}
      apiUrl="/api/ExecAlertsList"
      apiDataKey="Results.MSResults"
      actions={actions}
      offCanvas={offCanvas}
      simpleColumns={simpleColumns}
    />
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
