<<<<<<< HEAD
import { Stack } from "@mui/material";
import { CippWizardStepButtons } from "./CippWizardStepButtons";
import { CippFormTenantSelector } from "../CippComponents/CippFormTenantSelector";

export const CippTenantStep = (props) => {
  const {
    allTenants,
    type = "single",
    valueField = "defaultDomainName",
    onNextStep,
    formControl,
    currentStep,
    onPreviousStep,
    preText,
  } = props;

  return (
    <Stack spacing={3}>
      {preText}
      <label>Select a tenant</label>
      <CippFormTenantSelector
        valueField={valueField}
        formControl={formControl}
        allTenants={allTenants}
        type={type}
      />
      <CippWizardStepButtons
        currentStep={currentStep}
        onPreviousStep={onPreviousStep}
        onNextStep={onNextStep}
        formControl={formControl}
      />
    </Stack>
  );
};
=======
import { Stack } from "@mui/material";
import { CippWizardStepButtons } from "./CippWizardStepButtons";
import { CippFormTenantSelector } from "../CippComponents/CippFormTenantSelector";

export const CippTenantStep = (props) => {
  const {
    allTenants,
    type = "single",
    valueField = "defaultDomainName",
    onNextStep,
    formControl,
    currentStep,
    onPreviousStep,
    preText,
  } = props;

  return (
    <Stack spacing={3}>
      {preText}
      <label>Select a tenant</label>
      <CippFormTenantSelector
        valueField={valueField}
        formControl={formControl}
        allTenants={allTenants}
        type={type}
        preselectedEnabled={true}
      />
      <CippWizardStepButtons
        currentStep={currentStep}
        onPreviousStep={onPreviousStep}
        onNextStep={onNextStep}
        formControl={formControl}
      />
    </Stack>
  );
};
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
