import { Outlet } from "react-router-dom";
import TopNavBar from "../components/TopNavbar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNavBar />
      <main className="flex-grow pb-13">
        <Outlet />
      </main>
    </div>
  );
}
