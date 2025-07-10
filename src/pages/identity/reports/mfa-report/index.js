<<<<<<< HEAD
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";

const Page = () => {
  const pageTitle = "MFA Report";
  const apiUrl = "/api/ListMFAUsers";
  const simpleColumns = [
    "UPN",
    "AccountEnabled",
    "isLicensed",
    "MFARegistration",
    "PerUser",
    "CoveredBySD",
    "CoveredByCA",
    "MFAMethods",
    "CAPolicies",
  ];

  /* Filters not supported in the current structure, need dev attention for integration.
  filterlist: [
    { filterName: 'Enabled users', filter: '"accountEnabled":true' },
    { filterName: 'Non-guest users', filter: 'Complex: UPN notlike #EXT#' },
    { filterName: 'Licensed users', filter: 'Complex: IsLicensed eq true' },
    { filterName: 'Enabled, licensed non-guest users missing MFA', filter: 'Complex: UPN notlike #EXT#; IsLicensed eq true; accountEnabled eq true; MFARegistration ne true' },
    { filterName: 'No MFA methods registered', filter: 'Complex: MFARegistration ne true' },
    { filterName: 'MFA methods registered', filter: 'Complex: MFARegistration eq true' },
  ],
  */

  return <CippTablePage title={pageTitle} apiUrl={apiUrl} simpleColumns={simpleColumns} />;
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
=======
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";
import { LockPerson } from "@mui/icons-material";

const Page = () => {
  const pageTitle = "MFA Report";
  const apiUrl = "/api/ListMFAUsers";
  const simpleColumns = [
    "UPN",
    "AccountEnabled",
    "isLicensed",
    "MFARegistration",
    "PerUser",
    "CoveredBySD",
    "CoveredByCA",
    "MFAMethods",
    "CAPolicies",
  ];
  const filters = [
    {
      filterName: "Enabled, licensed users",
      value: [
        { id: "AccountEnabled", value: "Yes" },
        { id: "isLicensed", value: "Yes" },
      ],
      type: "column",
    },
    {
      filterName: "Enabled, licensed users missing MFA",
      value: [
        { id: "AccountEnabled", value: "Yes" },
        { id: "isLicensed", value: "Yes" },
        { id: "MFARegistration", value: "No" },
      ],
      type: "column",
    },
    {
      filterName: "No MFA methods registered",
      value: [{ id: "MFARegistration", value: "No" }],
      type: "column",
    },
    {
      filterName: "MFA methods registered",
      value: [{ id: "MFARegistration", value: "Yes" }],
      type: "column",
    },
  ];

  const actions = [
    {
      label: "Set Per-User MFA",
      type: "POST",
      icon: <LockPerson />,
      url: "/api/ExecPerUserMFA",
      data: { userId: "UPN" },
      fields: [
        {
          type: "autoComplete",
          name: "State",
          label: "State",
          options: [
            { label: "Enforced", value: "Enforced" },
            { label: "Enabled", value: "Enabled" },
            { label: "Disabled", value: "Disabled" },
          ],
          multiple: false,
          creatable: false,
        },
      ],
      confirmText: "Are you sure you want to set per-user MFA for these users?",
      multiPost: false,
    },
  ];

  return (
    <CippTablePage
      title={pageTitle}
      apiUrl={apiUrl}
      simpleColumns={simpleColumns}
      filters={filters}
      actions={actions}
    />
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
