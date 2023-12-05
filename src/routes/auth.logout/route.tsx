import { useEffect } from "react";

export function Component() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.assign("/");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <div>已退出登录，即将跳转 ... </div>;
}

export async function loader() {
  try {
    // await AuthService.logout();
  } finally {
    //
  }
  return null;
}
