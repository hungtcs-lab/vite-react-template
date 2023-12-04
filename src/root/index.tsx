import { ConfigProvider } from "antd";
import en_US from "antd/locale/en_US";
import zh_CN from "antd/locale/zh_CN";
import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { useLanguage } from "~/shared/hooks/use-language";
import { StyledThemeProvider } from "./styled-theme.provider";

export function Component() {
  const language = useLanguage();

  const antdLocale = useMemo(() => (language === "zh-CN" ? zh_CN : en_US), [language]);

  return (
    <ConfigProvider
      theme={{ token: {}, components: { Layout: { headerHeight: 58, headerPadding: "0px 20px" } } }}
      locale={antdLocale}
    >
      <StyledThemeProvider>
        <Outlet />
      </StyledThemeProvider>
    </ConfigProvider>
  );
}
