// app/BootstrapProvider.tsx
"use client";
import { useEffect } from "react";

export default function BootstrapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    import("aos/dist/aos.js").then((AOS) => {
      AOS.init();
    });
  }, []);

  return <>{children}</>;
}