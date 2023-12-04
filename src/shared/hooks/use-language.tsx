import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { i18n } = useTranslation();

  const language = useMemo(() => i18n.language, [i18n.language]);

  return language;
}
