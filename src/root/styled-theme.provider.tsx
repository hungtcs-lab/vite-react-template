import { theme } from "antd";
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export function StyledThemeProvider(props: PropsWithChildren) {
  const { token } = theme.useToken();

  return <ThemeProvider theme={{ token }}>{props.children}</ThemeProvider>;
}
