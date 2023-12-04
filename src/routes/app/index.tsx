import { Outlet, useLoaderData, type LoaderFunctionArgs, type ShouldRevalidateFunctionArgs } from "react-router-dom";
import { AppLayout } from "./layout";

export function Component() {
  const loaderData = useLoaderData();

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  return null;
}

export function shouldRevalidate({ currentUrl, nextUrl }: ShouldRevalidateFunctionArgs) {
  return false;
}
