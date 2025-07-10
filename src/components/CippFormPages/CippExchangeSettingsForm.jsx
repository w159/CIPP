<<<<<<< HEAD
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Collapse,
  Divider,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CippFormComponent from "/src/components/CippComponents/CippFormComponent";
import { CippFormCondition } from "/src/components/CippComponents/CippFormCondition";
import { Forward } from "@mui/icons-material";
import { ApiGetCall, ApiPostCall } from "../../api/ApiCall";
import { useSettings } from "../../hooks/use-settings";
import { Grid } from "@mui/system";
import { CippApiResults } from "../CippComponents/CippApiResults";

const CippExchangeSettingsForm = (props) => {
  const userSettingsDefaults = useSettings();
  const { formControl, currentSettings, userId, calPermissions, isFetching } = props;
  // State to manage the expanded panels
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [relatedQueryKeys, setRelatedQueryKeys] = useState([]);

  const handleExpand = (panel) => {
    setExpandedPanel((prev) => (prev === panel ? null : panel));
  };

  const usersList = ApiGetCall({
    url: "/api/ListGraphRequest",
    data: {
      Endpoint: `users`,
      tenantFilter: userSettingsDefaults.currentTenant,
      $select: "id,displayName,userPrincipalName,mail",
      noPagination: true,
      $top: 999,
    },
    queryKey: `UserNames-${userSettingsDefaults.currentTenant}`,
  });

  const postRequest = ApiPostCall({
    datafromUrl: true,
    relatedQueryKeys: relatedQueryKeys,
  });

  const handleSubmit = (type) => {
    if (type === "permissions") {
      setRelatedQueryKeys([`Mailbox-${userId}`]);
    } else if (type === "calendar") {
      setRelatedQueryKeys([`CalendarPermissions-${userId}`]);
    } else if (type === "forwarding") {
      setRelatedQueryKeys([`Mailbox-${userId}`]);
    } else if (type === "ooo") {
      setRelatedQueryKeys([`ooo-${userId}`]);
    }

    const values = formControl.getValues();
    const data = {
      tenantFilter: userSettingsDefaults.currentTenant,
      userid: currentSettings.Mailbox[0].UserPrincipalName,
      ...values[type],
    };

    //remove all nulls and undefined values
    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] === null) {
        delete data[key];
      }
    });
    const url = {
      permissions: "/api/ExecEditMailboxPermissions",
      calendar: "/api/ExecEditCalendarPermissions",
      forwarding: "/api/ExecEmailForward",
      ooo: "/api/ExecSetOoO",
    };
    postRequest.mutate({
      url: url[type],
      data: data,
      queryKey: "MailboxPermissions",
    });

    // Reset the form
    formControl.reset();
  };

  // Data for each section
  const sections = [
    {
      id: "mailboxPermissions",
      cardLabelBox: "-", // This can be an icon or text label
      text: "Mailbox Permissions",
      subtext: "Manage mailbox permissions for users",
      formContent: (
        <Stack spacing={2}>
          <CippFormComponent
            type="autoComplete"
            label="Remove Full Access"
            name="permissions.RemoveFullAccess"
            isFetching={isFetching || usersList.isFetching}
            options={
              usersList?.data?.Results?.filter((user) =>
                currentSettings?.Permissions?.some(
                  (perm) =>
                    perm.AccessRights === "FullAccess" && perm.User === user.userPrincipalName
                )
              ).map((user) => ({
                value: user.userPrincipalName,
                label: `${user.displayName} (${user.userPrincipalName})`,
              })) || []
            }
            formControl={formControl}
          />
          <CippFormComponent
            type="autoComplete"
            label="Add Full Access - Automapping Enabled"
            name="permissions.AddFullAccess"
            isFetching={isFetching || usersList.isFetching}
            options={
              usersList?.data?.Results?.map((user) => ({
                value: user.userPrincipalName,
                label: `${user.displayName} (${user.userPrincipalName})`,
              })) || []
            }
            formControl={formControl}
          />
          <CippFormComponent
            type="autoComplete"
            label="Add Full Access - Automapping Disabled"
            name="permissions.AddFullAccessNoAutoMap"
            isFetching={isFetching || usersList.isFetching}
            options={
              usersList?.data?.Results?.map((user) => ({
                value: user.userPrincipalName,
                label: `${user.displayName} (${user.userPrincipalName})`,
              })) || []
            }
            formControl={formControl}
          />
          <CippFormComponent
            type="autoComplete"
            label="Add Send-as Permissions"
            name="permissions.AddSendAs"
            isFetching={isFetching || usersList.isFetching}
            options={
              usersList?.data?.Results?.map((user) => ({
                value: user.userPrincipalName,
                label: `${user.displayName} (${user.userPrincipalName})`,
              })) || []
            }
            formControl={formControl}
          />
          <CippFormComponent
            type="autoComplete"
            label="Remove Send-as Permissions"
            name="permissions.RemoveSendAs"
            isFetching={isFetching || usersList.isFetching}
            options={
              usersList?.data?.Results?.filter((user) =>
                currentSettings?.Permissions?.some(
                  (perm) => perm.AccessRights === "SendAs" && perm.User === user.userPrincipalName
                )
              ).map((user) => ({
                value: user.userPrincipalName,
                label: `${user.displayName} (${user.userPrincipalName})`,
              })) || []
            }
            formControl={formControl}
          />
          <CippFormComponent
            type="autoComplete"
            label="Add Send On Behalf Permissions"
            name="permissions.AddSendOnBehalf"
            isFetching={isFetching || usersList.isFetching}
            options={
              usersList?.data?.Results?.map((user) => ({
                value: user.userPrincipalName,
                label: `${user.displayName} (${user.userPrincipalName})`,
              })) || []
            }
            formControl={formControl}
          />
          <CippFormComponent
            type="autoComplete"
            label="Remove Send On Behalf Permissions"
            name="permissions.RemoveSendOnBehalf"
            isFetching={isFetching || usersList.isFetching}
            options={
              usersList?.data?.Results?.filter((user) =>
                currentSettings?.Permissions?.some(
                  (perm) =>
                    perm.AccessRights === "SendOnBehalf" && perm.User === user.userPrincipalName
                )
              ).map((user) => ({
                value: user.userPrincipalName,
                label: `${user.displayName} (${user.userPrincipalName})`,
              })) || []
            }
            formControl={formControl}
          />
          <Grid item size={12}>
            <CippApiResults apiObject={postRequest} />
          </Grid>
          <Grid>
            <Button
              onClick={() => handleSubmit("permissions")}
              variant="contained"
              disabled={!formControl.formState.isValid || postRequest.isPending}
            >
              Submit
            </Button>
          </Grid>
        </Stack>
      ),
    },
    {
      id: "calendarPermissions",
      cardLabelBox: "-",
      text: "Calendar Permissions",
      subtext: "Adjust calendar sharing settings",
      formContent: (
        <Stack spacing={2}>
          <CippFormComponent
            type="autoComplete"
            label="Remove Access"
            name="calendar.RemoveAccess"
            multiple={false}
            isFetching={isFetching || usersList.isFetching}
            options={
              usersList?.data?.Results?.filter((user) =>
                calPermissions?.some((perm) => perm.User === user.displayName)
              ).map((user) => ({
                value: user.userPrincipalName,
                label: `${user.displayName} (${user.userPrincipalName})`,
              })) || []
            }
            formControl={formControl}
          />
          <CippFormComponent
            type="autoComplete"
            label="Add Access"
            name="calendar.UserToGetPermissions"
            isFetching={isFetching || usersList.isFetching}
            options={[
              { value: "Default", label: "Default (Default)" },
              ...(usersList?.data?.Results?.map((user) => ({
                value: user.userPrincipalName,
                label: `${user.displayName} (${user.userPrincipalName})`,
              })) || []),
            ]}
            multiple={false}
            formControl={formControl}
          />
          <CippFormComponent
            type="hidden"
            name="calendar.FolderName"
            value={calPermissions?.[0]?.FolderName}
            formControl={formControl}
          />
          <CippFormCondition
            formControl={formControl}
            field="calendar.UserToGetPermissions"
            compareType="hasValue"
            compareValue={true}
          >
            <CippFormComponent
              type="autoComplete"
              label="Permission Level"
              name="calendar.Permissions"
              required={true}
              validators={{
                validate: (value) =>
                  value ? true : "Select the permission level for the calendar",
              }}
              isFetching={isFetching || usersList.isFetching}
              options={[
                { value: "Author", label: "Author" },
                { value: "Contributor", label: "Contributor" },
                { value: "Editor", label: "Editor" },
                { value: "Owner", label: "Owner" },
                { value: "NonEditingAuthor", label: "Non Editing Author" },
                { value: "PublishingAuthor", label: "Publishing Author" },
                { value: "PublishingEditor", label: "Publishing Editor" },
                { value: "Reviewer", label: "Reviewer" },
                { value: "LimitedDetails", label: "Limited Details" },
                { value: "AvailabilityOnly", label: "Availability Only" },
              ]}
              multiple={false}
              formControl={formControl}
            />
          </CippFormCondition>
          <Grid item size={12}>
            <CippApiResults apiObject={postRequest} />
          </Grid>
          <Grid>
            <Button
              onClick={() => handleSubmit("calendar")}
              variant="contained"
              disabled={!formControl.formState.isValid || postRequest.isPending}
            >
              Submit
            </Button>
          </Grid>
        </Stack>
      ),
    },
    {
      id: "mailboxForwarding",
      cardLabelBox: currentSettings?.ForwardAndDeliver ? <Forward /> : "-",
      text: "Mailbox Forwarding",
      subtext: "Configure email forwarding options",
      formContent: (
        <Stack spacing={2}>
          <CippFormComponent
            type="radio"
            name="forwarding.forwardOption"
            formControl={formControl}
            options={[
              { label: "Forward to Internal Address", value: "internalAddress" },
              {
                label: "Forward to External Address (Tenant must allow this)",
                value: "ExternalAddress",
              },
              { label: "Disable Email Forwarding", value: "disabled" },
            ]}
          />

          <CippFormCondition
            formControl={formControl}
            field="forwarding.forwardOption"
            compareType="is"
            compareValue="internalAddress"
          >
            <CippFormComponent
              type="autoComplete"
              label="Select User"
              name="forwarding.ForwardInternal"
              multiple={false}
              options={
                usersList?.data?.Results?.map((user) => ({
                  value: user.userPrincipalName,
                  label: `${user.displayName} (${user.userPrincipalName})`,
                })) || []
              }
              formControl={formControl}
            />
          </CippFormCondition>

          <CippFormCondition
            formControl={formControl}
            field="forwarding.forwardOption"
            compareType="is"
            compareValue="ExternalAddress"
          >
            <CippFormComponent
              type="textField"
              label="External Email Address"
              name="forwarding.ForwardExternal"
              formControl={formControl}
            />
          </CippFormCondition>

          <CippFormComponent
            type="switch"
            label="Keep a Copy of the Forwarded Mail in the Source Mailbox"
            name="forwarding.KeepCopy"
            formControl={formControl}
          />
          <Grid item size={12}>
            <CippApiResults apiObject={postRequest} />
          </Grid>
          <Grid>
            <Button
              onClick={() => handleSubmit("forwarding")}
              variant="contained"
              disabled={!formControl.formState.isValid || postRequest.isPending}
            >
              Submit
            </Button>
          </Grid>
        </Stack>
      ),
    },
    {
      id: "outOfOffice",
      cardLabelBox: "OOO",
      text: "Out Of Office",
      subtext: "Set automatic replies for when you are away",
      formContent: (
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid item size={12}>
              <CippFormComponent
                type="autoComplete"
                name="ooo.AutoReplyState"
                label="Auto Reply State"
                multiple={false}
                formControl={formControl}
                options={[
                  { label: "Enabled", value: "Enabled" },
                  { label: "Disabled", value: "Disabled" },
                  { label: "Scheduled", value: "Scheduled" },
                ]}
              />
            </Grid>
            <Grid item size={6}>
              <CippFormComponent
                type="datePicker"
                label="Start Date/Time"
                name="ooo.StartTime"
                formControl={formControl}
              />
            </Grid>
            <Grid item size={6}>
              <CippFormComponent
                type="datePicker"
                label="End Date/Time"
                name="ooo.EndTime"
                formControl={formControl}
              />
            </Grid>
            <Grid item size={12}>
              <CippFormComponent
                type="richText"
                label="Internal Message"
                name="ooo.InternalMessage"
                formControl={formControl}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item size={12}>
              <CippFormComponent
                type="richText"
                label="External Message"
                name="ooo.ExternalMessage"
                formControl={formControl}
                multiline
                rows={4}
              />
            </Grid>
            <Grid item size={12}>
              <CippApiResults apiObject={postRequest} />
            </Grid>
            <Grid>
              <Button
                onClick={() => handleSubmit("ooo")}
                variant="contained"
                disabled={!formControl.formState.isValid || postRequest.isPending}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Stack>
      ),
    },
  ];

  return (
    <Stack spacing={3}>
      {sections.map((section) => {
        const isExpanded = expandedPanel === section.id;
        return (
          <Card key={section.id}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              {/* Left Side: cardLabelBox, text, subtext */}
              <Stack direction="row" spacing={2} alignItems="center">
                {/* cardLabelBox */}
                <Box
                  sx={{
                    alignItems: "center",
                    borderRadius: 1,
                    color: "primary.contrastText",
                    display: "flex",
                    height: 40,
                    justifyContent: "center",
                    width: 40,
                  }}
                >
                  <Typography variant="subtitle2">{section.cardLabelBox}</Typography>
                </Box>

                {/* Main Text and Subtext */}
                <Box>
                  <Typography color="textPrimary" variant="h6">
                    {section.text}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {section.subtext}
                  </Typography>
                </Box>
              </Stack>

              {/* Expand Icon */}
              <IconButton onClick={() => handleExpand(section.id)}>
                <SvgIcon
                  fontSize="small"
                  sx={{
                    transition: "transform 150ms",
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <ExpandMoreIcon />
                </SvgIcon>
              </IconButton>
            </Box>
            <Collapse in={isExpanded}>
              <Divider />
              <Box sx={{ p: 2 }}>{section.formContent}</Box>
            </Collapse>
          </Card>
        );
      })}
    </Stack>
  );
};

export default CippExchangeSettingsForm;
=======
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Collapse,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { Check, Error } from "@mui/icons-material";
import CippFormComponent from "/src/components/CippComponents/CippFormComponent";
import { ApiGetCall, ApiPostCall } from "../../api/ApiCall";
import { useSettings } from "../../hooks/use-settings";
import { Grid } from "@mui/system";
import { CippApiResults } from "../CippComponents/CippApiResults";
import { useWatch } from "react-hook-form";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import CippForwardingSection from "../CippComponents/CippForwardingSection";

const CippExchangeSettingsForm = (props) => {
  const userSettingsDefaults = useSettings();
  const { formControl, currentSettings, userId, calPermissions, isFetching, oooRequest } = props;
  // State to manage the expanded panels
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [relatedQueryKeys, setRelatedQueryKeys] = useState([]);

  // Watch the Auto Reply State value
  const autoReplyState = useWatch({
    control: formControl.control,
    name: "ooo.AutoReplyState",
  });

  // Calculate if date fields should be disabled
  const areDateFieldsDisabled = autoReplyState?.value !== "Scheduled";

  const handleExpand = (panel) => {
    setExpandedPanel((prev) => (prev === panel ? null : panel));
  };

  const usersList = ApiGetCall({
    url: "/api/ListGraphRequest",
    data: {
      Endpoint: `users`,
      tenantFilter: userSettingsDefaults.currentTenant,
      $select: "id,displayName,userPrincipalName,mail",
      $top: 999,
    },
    queryKey: `UserNames-${userSettingsDefaults.currentTenant}`,
  });

  const contactsList = ApiGetCall({
    url: "/api/ListGraphRequest",
    data: {
      Endpoint: `contacts`,
      tenantFilter: userSettingsDefaults.currentTenant,
      $select: "displayName,mail,mailNickname",
      $top: 999,
    },
    queryKey: `TenantContacts-${userSettingsDefaults.currentTenant}`,
  });

  const postRequest = ApiPostCall({
    datafromUrl: true,
    relatedQueryKeys: relatedQueryKeys,
  });

  // Handle form reset and set dropdown state after successful API calls
  useEffect(() => {
    if (postRequest.isSuccess) {
      // If this was an OOO submission, preserve the submitted values
      if (relatedQueryKeys.includes(`ooo-${userId}`)) {
        const submittedValues = formControl.getValues();
        const oooFields = ['AutoReplyState', 'InternalMessage', 'ExternalMessage', 'StartTime', 'EndTime'];
        
        // Reset the form
        formControl.reset();
        
        // Restore the submitted OOO values
        oooFields.forEach(field => {
          const value = submittedValues.ooo?.[field];
          if (value !== undefined) {
            formControl.setValue(`ooo.${field}`, value);
          }
        });
      } else {
        // For non-OOO submissions, just reset normally
        formControl.reset();
      }
    }
  }, [postRequest.isSuccess, relatedQueryKeys, userId, formControl]);

  const handleSubmit = (type) => {
    if (type === "calendar") {
      setRelatedQueryKeys([`CalendarPermissions-${userId}`]);
    } else if (type === "forwarding") {
      setRelatedQueryKeys([`Mailbox-${userId}`]);
    } else if (type === "ooo") {
      setRelatedQueryKeys([`ooo-${userId}`]);
    } else if (type === "recipientLimits") {
      setRelatedQueryKeys([`Mailbox-${userId}`]);
    }

    const values = formControl.getValues();
    const data = {
      tenantFilter: userSettingsDefaults.currentTenant,
      userid: currentSettings.Mailbox[0].UserPrincipalName,
      ...values[type],
    };

    // Format data for recipient limits
    if (type === "recipientLimits") {
      data.Identity = currentSettings.Mailbox[0].Identity;
      data.recipientLimit = values[type].MaxRecipients;
      delete data.MaxRecipients;
    }

    //remove all nulls and undefined values
    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] === null) {
        delete data[key];
      }
    });
    const url = {
      calendar: "/api/ExecEditCalendarPermissions",
      forwarding: "/api/ExecEmailForward",
      ooo: "/api/ExecSetOoO",
      recipientLimits: "/api/ExecSetRecipientLimits",
    };
    postRequest.mutate({
      url: url[type],
      data: data,
      queryKey: "MailboxPermissions",
    });
  };

  // Data for each section
  const sections = [
    {
      id: "mailboxForwarding",
      cardLabelBox: {
        cardLabelBoxHeader: isFetching ? (
          <CircularProgress size="25px" color="inherit" />
        ) : (currentSettings?.ForwardingAddress) ? (
          <Check/>
        ) : (
          <Error/>
        ),
      },
      text: "Mailbox Forwarding",
      subtext: (currentSettings?.ForwardingAddress)
        ? "Email forwarding is configured for this mailbox"
        : "No email forwarding configured for this mailbox",
      formContent: (
        <CippForwardingSection
          formControl={formControl}
          usersList={usersList}
          contactsList={contactsList}
          postRequest={postRequest}
          handleSubmit={handleSubmit}
        />
      ),
    },
    {
      id: "outOfOffice",
      cardLabelBox: {
        cardLabelBoxHeader: <Typography variant="subtitle2">OOO</Typography>,
      },
      text: "Out Of Office",
      subtext: "Set automatic replies for when you are away",
      formContent: (
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <CippFormComponent
                type="autoComplete"
                name="ooo.AutoReplyState"
                label="Auto Reply State"
                multiple={false}
                formControl={formControl}
                creatable={false}
                options={[
                  { label: "Enabled", value: "Enabled" },
                  { label: "Disabled", value: "Disabled" },
                  { label: "Scheduled", value: "Scheduled" },
                ]}
              />
            </Grid>
            <Grid size={6}>
              <Tooltip 
                title={areDateFieldsDisabled ? "Scheduling is only available when Auto Reply State is set to Scheduled" : ""}
                placement="bottom"
              >
                <Box>
                  <CippFormComponent
                    type="datePicker"
                    label="Start Date/Time"
                    name="ooo.StartTime"
                    formControl={formControl}
                    disabled={areDateFieldsDisabled}
                  />
                </Box>
              </Tooltip>
            </Grid>
            <Grid size={6}>
              <Tooltip 
                title={areDateFieldsDisabled ? "Scheduling is only available when Auto Reply State is set to Scheduled" : ""}
                placement="bottom"
              >
                <Box>
                  <CippFormComponent
                    type="datePicker"
                    label="End Date/Time"
                    name="ooo.EndTime"
                    formControl={formControl}
                    disabled={areDateFieldsDisabled}
                  />
                </Box>
              </Tooltip>
            </Grid>
            <Grid size={12}>
              <CippFormComponent
                type="richText"
                label="Internal Message"
                name="ooo.InternalMessage"
                formControl={formControl}
                multiline
                rows={4}
              />
            </Grid>
            <Grid size={12}>
              <CippFormComponent
                type="richText"
                label="External Message"
                name="ooo.ExternalMessage"
                formControl={formControl}
                multiline
                rows={4}
              />
            </Grid>
            <Grid size={12}>
              <CippApiResults apiObject={postRequest} />
            </Grid>
            <Grid>
              <Button
                onClick={() => handleSubmit("ooo")}
                variant="contained"
                disabled={!formControl.formState.isValid || postRequest.isPending}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Stack>
      ),
    },
    {
      id: "recipientLimits",
      cardLabelBox: {
        cardLabelBoxHeader: <Typography variant="subtitle2">RL</Typography>,
      },
      text: "Recipient Limits",
      subtext: "Set the maximum number of recipients per message",
      formContent: (
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <CippFormComponent
                type="number"
                label="Maximum Recipients"
                name="recipientLimits.MaxRecipients"
                formControl={formControl}
                defaultValue={currentSettings?.Mailbox?.[0]?.RecipientLimits || 500}
                validators={{
                  required: "Please enter a number",
                  min: { value: 1, message: "The minimum is 1" },
                  max: { value: 1000, message: "The maximum is 1000" }, 
                }}
              />
            </Grid>
            <Grid size={12}>
              <CippApiResults apiObject={postRequest} />
            </Grid>
            <Grid>
              <Button
                onClick={() => handleSubmit("recipientLimits")}
                variant="contained"
                disabled={!formControl.formState.isValid || postRequest.isPending}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Stack>
      ),
    },
  ];

  return (
    <Stack spacing={3}>
      {sections.map((section) => {
        const isExpanded = expandedPanel === section.id;
        return (
          <Card key={section.id}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                py: 3,
                pl: 2,
                pr: 4,
                cursor: "pointer",
                "&:hover": {
                  bgcolor: "action.hover",
                },
              }}
              onClick={() => handleExpand(section.id)}
            >
              {/* Left Side: cardLabelBox, text, subtext */}
              <Stack direction="row" spacing={2} alignItems="center">
                {/* cardLabelBox */}
                <Box
                  sx={{
                    alignItems: "center",
                    borderRadius: 1,
                    color: "text.secondary",
                    display: "flex",
                    height: 40,
                    justifyContent: "center",
                    width: 40,
                  }}
                >
                  {section.cardLabelBox.cardLabelBoxHeader}
                </Box>

                {/* Main Text and Subtext */}
                <Box>
                  <Typography color="textPrimary" variant="h6">
                    {section.text}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {section.subtext}
                  </Typography>
                </Box>
              </Stack>

              <SvgIcon
                fontSize="small"
                sx={{
                  transition: "transform 150ms",
                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <ChevronDownIcon />
              </SvgIcon>
            </Box>
            <Collapse in={isExpanded} unmountOnExit>
              <Divider />
              <Box sx={{ p: 2 }}>{section.formContent}</Box>
            </Collapse>
          </Card>
        );
      })}
    </Stack>
  );
};

export default CippExchangeSettingsForm;
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
