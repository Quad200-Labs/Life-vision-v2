import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { getRoutePaths } from "@/constants";
import { cn } from "@/lib/utils";

const NavLinks: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  
  const routes = getRoutePaths();

  return (
    <>
      {Object.values(routes).map((route) => (
        <div
          key={route.path}
          onClick={() => handleNavigation(route.path)}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "hover:bg-accent hover:text-accent-foreground text-lg",
            location.pathname === route.path
              ? "underline underline-offset-4 font-semibold"
              : "text-muted-foreground"
          )}
        >
          {route.name}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
