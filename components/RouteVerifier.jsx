"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const RouteVerifier = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if the route is invalid
    fetch(pathname, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) {
          router.replace("/404"); // Redirect to /404 if the route is invalid
        }
      })
      .catch(() => {
        router.replace("/404");
      });
  }, [pathname, router]);

  return children;
};

export default RouteVerifier;
