import { Outlet } from "react-router-dom";
import TopNavBar from "../components/TopNavbar";

export default function MainLayout() {
  return (
    <div className="bg-bg flex min-h-screen flex-col items-center">
      <TopNavBar />
      <main className="ml:pb-0 w-full max-w-6xl pb-13">
        <Outlet />
      </main>
    </div>
  );
}
