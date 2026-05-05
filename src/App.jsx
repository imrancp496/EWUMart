import { EyeIcon, StudentIcon } from "@phosphor-icons/react";

function AuthHero() {
  return (
    <div
      className="flex flex-col gap-2 w-full max-w-[400px] ml:max-w-none ml:px-16 ml:h-screen ml:justify-center ml:bg-brand ml:overflow-hidden ml:relative
      ml:before:content-[''] ml:before:absolute ml:before:w-[420px] ml:before:h-[420px] ml:before:rounded-full ml:before:bg-circle ml:before:top-[-110px] ml:before:right-[-130px]
      ml:after:content-[''] ml:after:absolute ml:after:w-[300px] ml:after:h-[300px] ml:after:rounded-full ml:after:bg-circle-light ml:after:bottom-[-70px] ml:after:left-[-70px]"
    >
      <h1 className="font-extrabold font-syne text-brand text-3xl 2xs:text-4xl ml:text-white">
        EWU<span className="text-accent">Mart</span>
      </h1>
      <p className="text-text2 leading-5 ml:text-white ml:opacity-70">
        East West University's Student Marketplace
      </p>
    </div>
  );
}

function WelcomeHeader() {
  return (
    <div className="mb-8">
      <h2 className="font-syne font-bold text-xl 2xs:text-2xl mb-1 ml:text-3xl">
        Welcome back
      </h2>
      <p className="text-text2 text-sm">Sign in to your EWUMart account</p>
    </div>
  );
}

function AuthModeTabs() {
  return (
    <div className="border border-border rounded-lg overflow-hidden flex font-medium text-text2 text-sm mb-6">
      <button className="w-full py-2 cursor-pointer bg-brand text-surface">
        Login
      </button>
      <button className="w-full py-2 cursor-pointer">Sign Up</button>
    </div>
  );
}

function GoogleLoginButton() {
  return (
    <button className="bg-white flex items-center justify-center gap-4 py-2 w-full border border-border rounded-lg cursor-pointer transition-colors hover:bg-brand-light hover:border-blue-200 mb-4">
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        className="w-4 h-4"
      />
      Continue with Google
    </button>
  );
}

function RequirementBadge() {
  return (
    <p className="text-sm text-brand-mid bg-brand-light py-2 px-4 border border-brand-border rounded-lg mb-10 xs:flex xs:items-center xs:justify-center xs:gap-2">
      <StudentIcon size={18} className="hidden xs:block" />
      Login with your <strong>@std.ewubd.edu</strong> account
    </p>
  );
}

function Divider() {
  return (
    <div className="relative flex items-center justify-center before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:h-px before:bg-border before:-translate-y-1/2 mb-10">
      <span className="relative text-sm text-text3 bg-white">
        or browse as guest
      </span>
    </div>
  );
}

function GuestLoginButton() {
  return (
    <button className="font-medium text-text2 flex items-center justify-center gap-4 w-full border border-border rounded-lg py-2 cursor-pointer transition-colors hover:bg-bg2 mb-6">
      <EyeIcon size={22} />
      Browse as Guest
    </button>
  );
}

function SignupRedirect() {
  return (
    <p className="text-sm text-text3 text-center">
      Don't have an account?{" "}
      <a className="text-brand-mid underline cursor-pointer">Sign Up here</a>
    </p>
  );
}

function AuthPanel() {
  return (
    <div className="w-full max-w-[400px] ml:max-w-[500px] ml:px-12">
      <WelcomeHeader />
      <AuthModeTabs />
      <GoogleLoginButton />
      <RequirementBadge />
      <Divider />
      <GuestLoginButton />
      <SignupRedirect />
    </div>
  );
}

export default function App() {
  return (
    <div className="flex flex-col gap-16 items-center justify-center px-4 text-text min-h-screen bg-bg xs:px-8 ml:flex-row ml:gap-0 ml:px-0">
      <AuthHero />
      <AuthPanel />
    </div>
  );
}
