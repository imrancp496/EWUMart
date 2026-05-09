import { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "../components/TopNavbar";
import LeftNavBar from "../components/LeftNavBar";

export default function MainLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="bg-bg flex min-h-screen flex-col">
      <TopNavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="flex w-full flex-1 items-start">
        <LeftNavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <main className="ml:pb-8 xs:pt-8 xs:px-8 mx-auto w-full max-w-6xl flex-1 px-4 pt-4 pb-23">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
