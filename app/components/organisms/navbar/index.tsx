import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { getRoutePaths } from "@/constants";
import { LanguageSelector } from "@/components/atoms/dropdowns/language-selector";
import { LogoComponent } from "@/components/atoms/logo";
import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import NavLinks from "@/components/molecules/navbar/nav-links";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const routes = getRoutePaths();

  return (
    <motion.nav
      className={cn(
        "flex items-center justify-between py-5 px-4 md:px-10 lg:px-20 border-b bg-white w-full"
      )}
      animate={{
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center">
        <LogoComponent />
      </div>
      <div className="hidden lg:flex items-center space-x-4">
        <div className="flex space-x-2">
          {Object.values(routes).map((route) => (
            <Button
              variant={"ghost"}
              key={route.path}
              onClick={() => {
                handleNavigation(route.path);
              }}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "hover:bg-accent hover:text-accent-foreground text-lg",
                location.pathname === route.path
                  ? "underline underline-offset-4 font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {route.name}
            </Button>
          ))}
        </div>
        <LanguageSelector />
      </div>
      <div className="lg:hidden flex items-center space-x-4">
        <LanguageSelector />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-4">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Navbar;
