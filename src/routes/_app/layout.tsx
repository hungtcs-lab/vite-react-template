import { Layout, Menu } from "antd";
import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Layout)`
  min-height: 100dvh;
`;

export function AppLayout(props: PropsWithChildren) {
  return (
    <Wrapper>
      <Layout.Header>
        <Menu mode="horizontal" theme="dark" items={[{ key: "/", label: <Link to="/">Home</Link> }]} />
      </Layout.Header>
      <Layout.Content>{props.children}</Layout.Content>
    </Wrapper>
  );
}
