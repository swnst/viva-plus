import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import thTranslation from "@/locales/th/common.json";

i18n.use(initReactI18next).init({
  resources: {
    th: {
      translation: thTranslation,
    },
  },
  lng: "th",
  fallbackLng: "th",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
