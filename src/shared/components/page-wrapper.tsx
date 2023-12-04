import { theme } from "antd";
import { useMemo, type PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
`;

export interface PageWrapperProps {
  padding?: boolean | number | string;
}

export function PageWrapper(props: PropsWithChildren<PageWrapperProps>) {
  const { padding: _padding, children } = props;

  const { token } = theme.useToken();

  console.log(token.Layout?.headerHeight);

  const padding = useMemo(() => {
    if (typeof _padding === "boolean" && _padding) {
      return "16px";
    }
    if (typeof _padding === "number") {
      return `${_padding}px`;
    }
    if (typeof _padding === "string") {
      return _padding;
    }
    return "0px";
  }, [_padding]);

  return <Wrapper style={{ padding }}>{children}</Wrapper>;
}
