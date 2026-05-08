import RegistrationModal from "../modals/RegistrationModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiEye, PiStudent } from "react-icons/pi";

function AuthHero() {
  return (
    <div className="ml:max-w-none ml:px-16 ml:h-screen ml:justify-center ml:bg-brand ml:overflow-hidden ml:relative ml:before:content-[''] ml:before:absolute ml:before:w-105 ml:before:h-105 ml:before:rounded-full ml:before:bg-circle ml:before:-top-27.5 ml:before:-right-32.5 ml:after:content-[''] ml:after:absolute ml:after:w-75 ml:after:h-75 ml:after:rounded-full ml:after:bg-circle-light ml:after:-bottom-17.5 ml:after:-left-17.5 flex w-full max-w-100 flex-col gap-2">
      <h1 className="font-syne text-brand 2xs:text-4xl ml:text-white text-3xl font-extrabold">
        EWU<span className="text-accent">Mart</span>
      </h1>
      <p className="text-text2 ml:text-white ml:opacity-70 leading-5">
        East West University's Student Marketplace
      </p>
    </div>
  );
}

function WelcomeHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="font-syne 2xs:text-2xl ml:text-3xl mb-1 text-xl font-bold">
        {title}
      </h2>
      <p className="text-text2 text-sm">{subtitle}</p>
    </div>
  );
}

function AuthModeTabs({ activeTab, setActiveTab }) {
  return (
    <div className="border-border text-text2 mb-6 flex overflow-hidden rounded-lg border text-sm font-medium">
      <button
        className={`w-full cursor-pointer py-2 ${
          activeTab == "login" && "bg-brand text-surface"
        }`}
        onClick={() => setActiveTab("login")}
      >
        Login
      </button>
      <button
        className={`w-full cursor-pointer py-2 ${
          activeTab == "signup" && "bg-brand text-surface"
        }`}
        onClick={() => setActiveTab("signup")}
      >
        Sign Up
      </button>
    </div>
  );
}

function GoogleLoginButton({ setVerficationStatus }) {
  return (
    <button
      onClick={() => setVerficationStatus("verified")}
      className="border-border hover:bg-brand-light mb-4 flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border bg-white py-2 transition-colors hover:border-blue-200"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        className="h-4 w-4"
      />
      Continue with Google
    </button>
  );
}

function RequirementBadge({ badgeText }) {
  return (
    <p className="text-brand-mid bg-brand-light border-brand-border xs:flex xs:items-center xs:justify-center xs:gap-2 mb-10 rounded-lg border px-4 py-2 text-sm">
      <PiStudent size={18} className="xs:block hidden" />
      {badgeText}
    </p>
  );
}

function Divider() {
  return (
    <div className="before:bg-border relative mb-10 flex items-center justify-center before:absolute before:top-1/2 before:right-0 before:left-0 before:h-px before:-translate-y-1/2 before:content-['']">
      <span className="text-text3 relative rounded-full bg-white px-2 text-sm">
        or browse as guest
      </span>
    </div>
  );
}

function GuestLoginButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/home")}
      className="text-text2 border-border hover:bg-bg2 mb-6 flex w-full cursor-pointer items-center justify-center gap-4 rounded-lg border py-2 font-medium transition-colors"
    >
      <PiEye size={22} />
      Continue as Guest
    </button>
  );
}

function AuthRedirect({ activeTab, setActiveTab }) {
  return (
    <p className="text-text3 text-center text-sm">
      {activeTab == "login" ? "Don't" : "Already"} have an account?{" "}
      <a
        className="text-brand-mid cursor-pointer underline"
        onClick={() => setActiveTab(activeTab == "login" ? "signup" : "login")}
      >
        {activeTab == "login" ? "Sign up" : "Login"} here
      </a>
    </p>
  );
}

function AuthPanel({ setVerficationStatus }) {
  const [activeTab, setActiveTab] = useState("login");

  const badgeText =
    activeTab === "login" ? (
      <>
        Login with your <strong>@std.ewubd.edu</strong> account{" "}
      </>
    ) : (
      <>
        Only <strong>@std.ewubd.edu</strong> accounts can register
      </>
    );

  const title = activeTab === "login" ? "Welcome back!" : "Create Account";

  const subtitle =
    activeTab === "login"
      ? "Sign in to your EWUMart account"
      : "Create an account to start buying and selling!";

  return (
    <div className="ml:max-w-[500px] ml:px-12 w-full max-w-[400px]">
      <WelcomeHeader title={title} subtitle={subtitle} />
      <AuthModeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <GoogleLoginButton setVerficationStatus={setVerficationStatus} />
      <RequirementBadge badgeText={badgeText} />
      <Divider />
      <GuestLoginButton />
      <AuthRedirect activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default function AuthPage() {
  const [verficationStatus, setVerficationStatus] = useState("pending");

  return (
    <div className="text-text bg-bg xs:px-8 ml:flex-row ml:gap-0 ml:px-0 flex min-h-screen flex-col items-center justify-center gap-16 px-4">
      <AuthHero />
      <AuthPanel setVerficationStatus={setVerficationStatus} />
      {verficationStatus === "verified" && (
        <RegistrationModal setVerficationStatus={setVerficationStatus} />
      )}
    </div>
  );
}
