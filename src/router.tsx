import { Link, Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./root"),
    children: [
      {
        path: "",
        lazy: () => import("./routes/_app/route"),
        children: [
          {
            index: true,
            element: <Navigate to="home" />,
          },
          {
            path: "home",
            lazy: () => import("./routes/_app.home/route"),
          },
        ],
      },
      {
        path: "auth",
        children: [
          {
            path: "login",
            lazy: () => import("./routes/auth.login/route"),
          },
          {
            path: "logout",
            lazy: () => import("./routes/auth.logout/route"),
          },
        ],
      },
      {
        path: "initialization",
        lazy: () => import("./routes/initialization/route"),
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
