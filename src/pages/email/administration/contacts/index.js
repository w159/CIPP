<<<<<<< HEAD
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";
import { Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

const Page = () => {
  const pageTitle = "Contacts";

  const actions = [
    {
      label: "Remove Contact",
      type: "POST",
      url: "/api/RemoveContact",
      data: {
        TenantFilter: "Tenant",
        GUID: "id",
      },
      confirmText: "Are you sure you want to delete this contact?",
      color: "danger",
    },
    {
      label: "Edit Contact",
      link: "/email/administration/edit-contact/[id]",
      multiPost: false,
      icon: <Edit />,
      color: "warning",
    },
  ];

  const simpleColumns = ["displayName", "mail", "companyName", "onPremisesSyncEnabled"];

  return (
    <CippTablePage
      title={pageTitle}
      apiUrl="/api/ListContacts"
      actions={actions}
      simpleColumns={simpleColumns}
      cardButton={
        <>
          <Button component={Link} href="/email/administration/contacts/add">
            Add contact
          </Button>
        </>
      }
    />
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
=======
import { useMemo } from "react";
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";
import { Edit, PersonAdd } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

const Page = () => {
  const pageTitle = "Contacts";
  const actions = useMemo(() => [
    {
      label: "Edit Contact",
      link: "/email/administration/contacts/edit?id=[Guid]",
      multiPost: false,
      postEntireRow: true,
      icon: <Edit />,
      color: "warning",
      condition: (row) => !row.IsDirSynced,
    },
    {
      label: "Remove Contact",
      type: "POST",
      url: "/api/RemoveContact",
      data: {
        GUID: "Guid",
        mail: "WindowsEmailAddress",
      },
      confirmText:
        "Are you sure you want to delete this contact? Remember this will not work if the contact is AD Synced.",
      color: "danger",
      icon: <TrashIcon />,
      condition: (row) => !row.IsDirSynced,
    },
  ], []);

  const simpleColumns = useMemo(() => [
    "DisplayName", 
    "WindowsEmailAddress", 
    "Company", 
    "IsDirSynced"
  ], []);

  const cardButton = useMemo(() => (
    <Button
      component={Link}
      href="/email/administration/contacts/add"
      startIcon={<PersonAdd />}
    >
      Add contact
    </Button>
  ), []);

  return (
    <CippTablePage
      title={pageTitle}
      apiUrl="/api/ListContacts"
      actions={actions}
      simpleColumns={simpleColumns}
      cardButton={cardButton}
    />
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
