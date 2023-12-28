"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
// import loading from "@/app/loading";

const RouteChanging = ({ changing, children }) => {
  const path = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  if (path == currentPath) {
    changing = false;
  } else {
    changing = true;
  }

  useEffect(() => {
    setCurrentPath(window?.location?.pathname);
  }, [path]);

  console.log(path, changing, currentPath);

  return <>{changing ? <loading /> : children}</>;
};

export default RouteChanging;
