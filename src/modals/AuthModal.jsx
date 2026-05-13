import { useState, useRef, useEffect } from "react";
import { PiX, PiQuestion, PiArrowLeft } from "react-icons/pi";
import CustomSelect from "../components/CustomSelect";

const departmentOptions = [
  { value: "cse", label: "CSE" },
  { value: "bba", label: "BBA" },
  { value: "pha", label: "Pharmacy" },
  { value: "eee", label: "EEE" },
  { value: "ice", label: "ICE" },
  { value: "geb", label: "GEB" },
  { value: "ce", label: "Civil" },
  { value: "pphs", label: "PPHS" },
  { value: "eco", label: "Economics" },
  { value: "soc", label: "Sociology" },
  { value: "eng", label: "English" },
  { value: "law", label: "Law" },
  { value: "mat", label: "Mathematics" },
  { value: "dsa", label: "Data Science & Analytics" },
  { value: "is", label: "Information Studies" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

function AuthHeader({ text }) {
  return (
    <h2 className="text-text mb-4 text-center text-2xl font-bold">{text}</h2>
  );
}

function PrivacyPolicy() {
  return (
    <p className="text-text2 mb-8 text-center text-sm">
      By continuing, you agree to our{" "}
      <a className="text-brand-mid cursor-pointer hover:underline">
        User Agreement
      </a>{" "}
      and acknowledge that you understand the{" "}
      <a className="text-brand-mid cursor-pointer hover:underline">
        Privacy Policy
      </a>
      .
    </p>
  );
}

function RequirementText() {
  return (
    <p className="text-text2 mb-4 text-center text-sm">
      <span className="text-danger">*</span> Use your{" "}
      <strong>@std.ewubd.edu</strong> account
    </p>
  );
}

function AuthRedirect({ text, linkText, linkAction }) {
  return (
    <p className="text-text2 text-sm">
      {text}{" "}
      <a
        onClick={linkAction}
        className="text-brand-mid cursor-pointer hover:underline"
      >
        {linkText}
      </a>
    </p>
  );
}

function ContinueButton({ text, action }) {
  return (
    <button
      onClick={action}
      className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-full bg-gray-200 py-3 transition-colors hover:bg-gray-300"
    >
      {text}
    </button>
  );
}

function InfoTooltip({ text }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex cursor-pointer items-center"
      onClick={() => setIsVisible(!isVisible)}
    >
      <PiQuestion size={18} className="text-text2" />
      {isVisible && (
        <div className="border-border bg-bg text-text2 absolute top-full left-1/2 z-300 mt-2 w-40 -translate-x-5/6 transform cursor-default rounded-lg border px-3 py-2 shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
}

function AuthLogin({ onGoogleClick, onSwitchToSignup }) {
  return (
    <div>
      <AuthHeader text="Login" />
      <PrivacyPolicy />
      <RequirementText />
      <button
        onClick={onGoogleClick}
        className="border-border hover:bg-brand-light mb-8 flex w-full cursor-pointer items-center justify-center gap-4 rounded-full border bg-white py-3 transition-colors hover:border-blue-200"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
          className="h-4 w-4"
        />
        Continue with Google
      </button>
      <AuthRedirect
        text="Don't have an account?"
        linkText="Sign up"
        linkAction={onSwitchToSignup}
      />
    </div>
  );
}

function AuthSignup({ onGoogleClick, onSwitchToLogin }) {
  return (
    <div>
      <AuthHeader text="Sign Up" />
      <PrivacyPolicy />
      <RequirementText />
      <button
        onClick={onGoogleClick}
        className="border-border hover:bg-brand-light mb-8 flex w-full cursor-pointer items-center justify-center gap-4 rounded-full border bg-white py-3 transition-colors hover:border-blue-200"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
          className="h-4 w-4"
        />
        Continue with Google
      </button>
      <AuthRedirect
        text="Already have an account?"
        linkText="Login"
        linkAction={onSwitchToLogin}
      />
    </div>
  );
}

function AuthForm() {
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div>
      <AuthHeader text="Complete Your Profile" />
      <form className="text-text2 2sm:gap-6 mt-8 flex flex-col gap-4 text-sm">
        <div className="flex flex-col gap-1">
          <label>Full Name *</label>
          <input
            type="text"
            defaultValue="Imran Hossain"
            placeholder="John Smith"
            className="text-text border-border focus:border-brand-mid rounded-lg border-[1.5px] px-4 py-2"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Nickname *</label>
          <input
            type="text"
            placeholder="What should we call you?"
            className="text-text border-border focus:border-brand-mid rounded-lg border-[1.5px] px-4 py-2"
          />
        </div>

        {/* <div className="flex flex-col gap-1">
          <label>Student ID</label>
          <input
            type="text"
            value="2023-3-60-202"
            readOnly
            disabled
            className="bg-bg text-text border-border focus:border-brand-mid rounded-lg border-[1.5px] px-4 py-2"
          />
        </div> */}

        <div className="2sm:flex-row 2sm:gap-4 flex flex-col gap-6">
          <div className="flex w-full min-w-0 flex-col gap-1">
            <label>Gender *</label>
            <CustomSelect
              options={genderOptions}
              placeholder="Select"
              value={gender}
              onChange={setGender}
            />
          </div>

          <div className="flex w-full min-w-0 flex-col gap-1">
            <label>Department *</label>
            <CustomSelect
              options={departmentOptions}
              placeholder="Select"
              value={department}
              onChange={setDepartment}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

function ConfirmSeller({ onYes, onNo }) {
  return (
    <div>
      <AuthHeader text="Are you a Seller?" />
      <div className="mt-8 flex flex-col gap-4">
        <button
          onClick={onYes}
          className="border-border hover:bg-brand-light flex w-full cursor-pointer items-center justify-center gap-4 rounded-full border bg-white py-3 transition-colors hover:border-blue-200"
        >
          Yes
        </button>
        <button
          onClick={onNo}
          className="border-border hover:bg-brand-light flex w-full cursor-pointer items-center justify-center gap-4 rounded-full border bg-white py-3 transition-colors hover:border-blue-200"
        >
          No
        </button>
      </div>
    </div>
  );
}

function SellerForm() {
  return (
    <div className="pb-20">
      <AuthHeader text="Almost there!" />
      <form className="text-text2 mt-8 flex flex-col gap-6 text-sm">
        <div className="flex flex-col gap-1">
          <label>Profile Name *</label>
          <input
            type="text"
            placeholder="Business name or your name"
            className="text-text border-border focus:border-brand-mid rounded-lg border-[1.5px] px-4 py-2"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/250px-Facebook_f_logo_%282019%29.svg.png"
              className="w-4"
            />
            Facebook Profile URL *
            <InfoTooltip text="Providing your Facebook profile is optional, but it can help us verify your identity and build trust within the marketplace." />
          </label>
          <input
            type="text"
            placeholder="facebook.com/yourprofile"
            className="text-text border-border focus:border-brand-mid rounded-lg border-[1.5px] px-4 py-2"
          />
        </div>
      </form>
    </div>
  );
}

export default function AuthModal({ isOpen, initialStep = "login", onClose }) {
  const [step, setStep] = useState(initialStep);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setStep(initialStep);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isDismissable = step === "login" || step === "signup";

  const showBack = step === "confirmSeller" || step === "sellerForm";

  const handleBack = () => {
    if (step === "confirmSeller") setStep("authForm");
    else if (step === "sellerForm") setStep("confirmSeller");
  };

  const handleGoogleClick = () => {
    if (step === "login") {
      onClose();
    } else {
      setStep("authForm");
    }
  };

  const continueConfig =
    step === "authForm"
      ? { text: "Continue", action: () => setStep("confirmSeller") }
      : step === "sellerForm"
        ? { text: "Finish", action: onClose }
        : null;

  return (
    <div
      className="2sm:bg-black/30 fixed inset-0 z-200 flex items-center justify-center"
      onClick={isDismissable ? onClose : undefined}
    >
      <div
        className="2sm:h-172 2sm:w-lg 2sm:rounded-2xl flex h-full w-full flex-col bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-20 items-center justify-between p-6">
          <div className="flex h-8 w-8 items-center justify-center">
            {showBack && (
              <div
                onClick={handleBack}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
              >
                <PiArrowLeft size={18} />
              </div>
            )}
          </div>

          <div className="flex h-8 w-8 items-center justify-center">
            {isDismissable && (
              <div
                onClick={onClose}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
              >
                <PiX size={18} />
              </div>
            )}
          </div>
        </div>

        <div className="2sm:px-20 grow px-6">
          {step === "login" && (
            <AuthLogin
              onGoogleClick={handleGoogleClick}
              onSwitchToSignup={() => setStep("signup")}
            />
          )}
          {step === "signup" && (
            <AuthSignup
              onGoogleClick={handleGoogleClick}
              onSwitchToLogin={() => setStep("login")}
            />
          )}
          {step === "authForm" && <AuthForm />}
          {step === "confirmSeller" && (
            <ConfirmSeller onYes={() => setStep("sellerForm")} onNo={onClose} />
          )}
          {step === "sellerForm" && <SellerForm />}
        </div>

        <div className="2sm:px-20 px-6 py-6">
          {continueConfig && (
            <ContinueButton
              text={continueConfig.text}
              action={continueConfig.action}
            />
          )}
        </div>
      </div>
    </div>
  );
}
