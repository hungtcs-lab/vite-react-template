import "sanitize.css";
import "sanitize.css/assets.css";
import "sanitize.css/forms.css";
import "sanitize.css/system-ui.css";
import "sanitize.css/typography.css";
import "sanitize.css/ui-monospace.css";
import "./global.scss";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
