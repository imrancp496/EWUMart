import { Outlet } from "react-router-dom";
import TopNavBar from "../components/TopNavbar";
import BottomNavBar from "../components/BottomNavBar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNavBar />
      <main className="flex-grow pb-16">
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  );
}
