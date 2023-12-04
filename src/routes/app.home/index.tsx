import styled from "styled-components";
import { PageWrapper } from "~/shared/components";

const Wrapper = styled.div`
  height: 100%;
  padding: 1rem;
`;

export function Component() {
  return (
    <PageWrapper padding={true}>
      <p>Home Page</p>
    </PageWrapper>
  );
}
