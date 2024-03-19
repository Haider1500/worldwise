import { Outlet } from "react-router-dom";

import { Logo } from "./Logo";
import { AppNav } from "./AppNav";

export function SideBar() {
  return (
    <div className="bg-gray-700 flex flex-1 flex-col items-center w-6/12 sm:w-4/12 gap-8 py-5 relative">
      <Logo />
      <AppNav />
      <Outlet />
      <p className="absolute text-sm sm:text-md text-center bottom-10">
        &copy; Copyrights 2023 by WorldWise inc
      </p>
    </div>
  );
}
