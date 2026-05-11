import { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavBar from "../components/TopNavbar";
import LeftNavBar from "../components/LeftNavBar";
import AuthModal from "../modals/AuthModal";

export default function MainLayout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null);

  const openLogin = () => setAuthModal("login");
  const openSignup = () => setAuthModal("signup");
  const closeAuthModal = () => setAuthModal(null);

  return (
    <div className="bg-bg flex min-h-screen flex-col">
      <TopNavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="flex w-full flex-1 items-start">
        <LeftNavBar
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          onLogin={openLogin}
          onSignup={openSignup}
        />
        <main className="ml:pb-8 xs:pt-8 xs:px-8 mx-auto w-full max-w-6xl flex-1 px-4 pt-4 pb-23">
          <Outlet />
        </main>
      </div>

      <AuthModal
        isOpen={authModal !== null}
        initialStep={authModal ?? "login"}
        onClose={closeAuthModal}
      />
    </div>
  );
}
