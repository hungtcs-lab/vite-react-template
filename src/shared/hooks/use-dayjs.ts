import dayjs from "dayjs";
import { useMemo } from "react";
import { useLanguage } from "./use-language";

export function useDayjs() {
  const language = useLanguage();

  const locale = useMemo(() => ({ "zh-CN": "zh-cn", "en-US": "en-us" })[language], [language]);

  return useMemo(() => (dayjs.locale(locale), dayjs), [locale]);
}
