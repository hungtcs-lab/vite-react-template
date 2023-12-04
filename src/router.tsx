import { Link, Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./root"),
    children: [
      {
        path: "",
        lazy: () => import("./routes/app"),
        children: [
          {
            index: true,
            element: <Navigate to="home" />,
          },
          {
            path: "home",
            lazy: () => import("./routes/app.home"),
          },
        ],
      },
      {
        path: "auth",
        children: [
          {
            path: "login",
            lazy: () => import("./routes/auth/login"),
          },
          {
            path: "logout",
            lazy: () => import("./routes/auth/logout"),
          },
        ],
      },
      {
        path: "initialization",
        lazy: () => import("./routes/initialization"),
      },
      {
        path: "*",
        element: (
          <div>
            <div>404</div>
            <Link to="/">back to home</Link>
          </div>
        ),
      },
    ],
  },
]);
