<<<<<<< HEAD
import { CippTranslations } from "../components/CippComponents/CippTranslations";

export const getCippTranslation = (field) => {
  if (field === null || field === undefined) {
    return "No data";
  }

  return (
    CippTranslations[field] ||
    field
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/(^|\.)(\w)/g, (_, dot, char) => dot + char.toUpperCase())
      .replace(/[_]/g, " ")
      .replace(/\./g, " - ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
  );
};
=======
import { CippTranslations } from "../components/CippComponents/CippTranslations";

export const getCippTranslation = (field) => {
  if (field === null || field === undefined) {
    return "No data";
  }

  // special translations for extensions
  if (field.startsWith("extension_")) {
    field = field.split("_").pop();
  }
  // special translation for schema extensions
  if (field.startsWith("ext") && field.includes("_")) {
    field = field.split("_").pop();
  }

  return (
    CippTranslations[field] ||
    field
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/(^|\.)(\w)/g, (_, dot, char) => dot + char.toUpperCase())
      .replace(/[_]/g, " ")
      .replace(/\./g, " - ")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
  );
};
>>>>>>> 36607733960427a2e6bf87b2d42254c2872bad5c
