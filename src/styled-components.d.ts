import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    token: import("antd").GlobalToken;
  }
}
