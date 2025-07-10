<<<<<<< HEAD
import { Box, Divider, Grid } from "@mui/material";
=======
import { Box, Divider } from "@mui/material";
import { Grid } from "@mui/system";
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
import CippFormPage from "../../../../components/CippFormPages/CippFormPage";
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippFormTenantSelector } from "../../../../components/CippComponents/CippFormTenantSelector";
import { useForm } from "react-hook-form";
import CippFormComponent from "../../../../components/CippComponents/CippFormComponent";
import { CippFormCondition } from "../../../../components/CippComponents/CippFormCondition";
import gdaproles from "/src/data/GDAPRoles.json";
import { CippFormDomainSelector } from "../../../../components/CippComponents/CippFormDomainSelector";
import { CippFormUserSelector } from "../../../../components/CippComponents/CippFormUserSelector";
const Page = () => {
  const formControl = useForm({ Mode: "onChange" });
  return (
    <>
      <CippFormPage
        queryKey={"JIT Admin Table"}
        formControl={formControl}
        title="JIT Admin"
        backButtonTitle="JIT Admin"
        postUrl="/api/ExecJitAdmin"
      >
        <Box sx={{ my: 2 }}>
          <Grid container spacing={2}>
<<<<<<< HEAD
            <Grid item xs={12} md={12}>
=======
            <Grid size={{ md: 12, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
              <CippFormTenantSelector
                label={"Select a tenant to create the JIT Admin in"}
                formControl={formControl}
                type="single"
                allTenants={false}
              />
            </Grid>
<<<<<<< HEAD
            <Grid item xs={12} md={12}>
=======
            <Grid size={{ md: 12, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
              <Divider sx={{ mb: 2 }} />
              <CippFormComponent
                type="radio"
                label="Would you like to create a new user or assign permissions to an existing user?"
                name="userAction"
                row
                formControl={formControl}
                options={[
                  { label: "New User", value: "create" },
                  { label: "Existing User", value: "select" },
                ]}
<<<<<<< HEAD
=======
                required={true}
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
              />
              <Divider sx={{ my: 2 }} />
            </Grid>
            <CippFormCondition
              formControl={formControl}
              field="userAction"
              compareType="is"
              compareValue="create"
            >
<<<<<<< HEAD
              <Grid item xs={12} md={6}>
=======
              <Grid size={{ md: 6, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
                <CippFormComponent
                  type="textField"
                  fullWidth
                  label="First Name"
                  name="firstName"
                  formControl={formControl}
<<<<<<< HEAD
                />
              </Grid>
              <Grid item xs={12} md={6}>
=======
                  required={true}
                />
              </Grid>
              <Grid size={{ md: 6, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
                <CippFormComponent
                  type="textField"
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  formControl={formControl}
<<<<<<< HEAD
                />
              </Grid>
              <Grid item xs={12} md={6}>
=======
                  required={true}
                />
              </Grid>
              <Grid size={{ md: 6, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
                <CippFormComponent
                  type="textField"
                  fullWidth
                  label="Username"
                  name="userName"
                  formControl={formControl}
<<<<<<< HEAD
                />
              </Grid>
              <Grid item xs={12} md={6}>
=======
                  required={true}
                />
              </Grid>
              <Grid size={{ md: 6, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
                <CippFormDomainSelector
                  formControl={formControl}
                  name="domain"
                  label="Domain Name"
<<<<<<< HEAD
                />
              </Grid>
              <Grid item xs={12} md={12}>
=======
                  required={true}
                  validators={{
                    validate: (option) => {
                      if (!option?.value) {
                        return "Domain is required";
                      }
                      return true;
                    },
                  }}
                />
              </Grid>
              <Grid size={{ md: 12, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
                <Divider sx={{ me: 2 }} />
              </Grid>
            </CippFormCondition>
            <CippFormCondition
              formControl={formControl}
              field="userAction"
              compareType="is"
              compareValue="select"
            >
<<<<<<< HEAD
              <Grid item xs={12} md={12}>
                <Grid item xs={12} md={12}>
=======
              <Grid size={{ md: 12, xs: 12 }}>
                <Grid size={{ md: 12, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
                  <CippFormUserSelector
                    formControl={formControl}
                    multiple={false}
                    name="existingUser"
                    label="User"
<<<<<<< HEAD
=======
                    required={true}
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
                  />
                </Grid>
              </Grid>
            </CippFormCondition>
<<<<<<< HEAD
            <Grid item xs={12} md={6}>
=======
            <Grid size={{ md: 6, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
              <CippFormComponent
                type="datePicker"
                fullWidth
                label="Start Date"
                name="startDate"
                formControl={formControl}
<<<<<<< HEAD
              />
            </Grid>
            <Grid item xs={12} md={6}>
=======
                required={true}
                validators={{
                  validate: (value) => {
                    if (!value) {
                      return "Start date is required";
                    }
                    return true;
                  },
                }}
              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
              <CippFormComponent
                type="datePicker"
                fullWidth
                label="End Date"
                name="endDate"
                formControl={formControl}
<<<<<<< HEAD
              />
            </Grid>
            <Grid item xs={12} md={12}>
=======
                required={true}
                validators={{
                  validate: (value) => {
                    const startDate = formControl.getValues("startDate");
                    if (!value) {
                      return "End date is required";
                    }
                    if (new Date(value) < new Date(startDate)) {
                      return "End date must be after start date";
                    }
                    return true;
                  },
                }}
              />
            </Grid>
            <Grid size={{ md: 12, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
              <CippFormComponent
                type="autoComplete"
                fullWidth
                label="Roles"
                name="adminRoles"
                options={gdaproles.map((role) => ({ label: role.Name, value: role.ObjectId }))}
                formControl={formControl}
<<<<<<< HEAD
              />
            </Grid>
            <Grid item xs={12} md={12}>
=======
                required={true}
                validators={{
                  validate: (options) => {
                    if (!options?.length) {
                      return "At least one role is required";
                    }
                    return true;
                  },
                }}
              />
            </Grid>
            <Grid size={{ md: 12, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
              <CippFormComponent
                type="switch"
                label="Generate TAP"
                name="UseTAP"
                formControl={formControl}
              />
            </Grid>
<<<<<<< HEAD
            <Grid item xs={12} md={6}>
=======
            <Grid size={{ md: 6, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
              <CippFormComponent
                type="autoComplete"
                fullWidth
                label="Expiration Action"
                name="expireAction"
                multiple={false}
                options={[
                  { label: "Delete User", value: "DeleteUser" },
                  { label: "Disable User", value: "DisableUser" },
                  { label: "Remove Roles", value: "RemoveRoles" },
                ]}
                formControl={formControl}
<<<<<<< HEAD
              />
            </Grid>
            <Grid item xs={12} md={6}>
=======
                required={true}
                validators={{
                  validate: (option) => {
                    if (!option?.value) {
                      return "Expiration action is required";
                    }
                    return true;
                  },
                }}
              />
            </Grid>
            <Grid size={{ md: 6, xs: 12 }}>
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
              <CippFormComponent
                type="autoComplete"
                fullWidth
                label="Notification Action"
                name="postExecution"
                multiple={true}
                options={[
                  { label: "Webhook", value: "Webhook" },
                  { label: "Email", value: "email" },
                  { label: "PSA", value: "PSA" },
                ]}
                formControl={formControl}
              />
            </Grid>
          </Grid>
        </Box>
      </CippFormPage>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
