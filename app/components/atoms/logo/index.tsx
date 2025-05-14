import React from "react";
import { Logo } from "@/assets/";

export const LogoComponent: React.FC = () => {
  return (
    <div className="flex items-center w-full h-10">
      <img src={Logo} alt="" className="" />
    </div>
  );
};
