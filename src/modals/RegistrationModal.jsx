import { useState, useRef, useEffect } from "react";
import { CheckIcon, CaretDownIcon, QuestionIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

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
      <QuestionIcon size={18} className="text-text2" />
      {isVisible && (
        <div className="border-border bg-bg text-text2 absolute bottom-full left-1/2 z-50 mb-2 w-[150px] -translate-x-5/6 transform cursor-default rounded-lg border px-3 py-2 shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
}

function CustomSelect({ options, placeholder, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        className={`flex w-full items-center justify-between rounded-lg border-[1.5px] px-4 py-2 text-left transition-colors focus:outline-none ${
          isOpen ? "border-brand-mid" : "border-border"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={
            value ? "text-text truncate pr-2" : "text-text2 truncate pr-2"
          }
        >
          {value
            ? options.find((o) => o.value === value)?.label || value
            : placeholder}
        </span>
        <CaretDownIcon
          size={16}
          className={`text-text2 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="border-border absolute top-[calc(100%+0.25rem)] left-0 z-50 max-h-40 w-full overflow-y-auto rounded-lg border bg-white py-1 text-left shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={`mx-1 mb-1 cursor-pointer rounded-md px-3 py-2 text-sm transition-colors last:mb-0 ${
                value === option.value
                  ? "bg-brand text-white"
                  : "text-text hover:bg-bg2"
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RegistrationModal({ setVerficationStatus }) {
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-xs">
      <div className="max-h-[95vh] w-lg rounded-xl bg-white p-8">
        <div className="xs:gap-8 mb-6 flex items-center text-xs">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-success flex h-8 w-8 items-center justify-center rounded-full text-white">
              <CheckIcon />
            </div>
            <span>Google Verified</span>
          </div>

          <div className="bg-success mb-4 h-[2px] flex-1"></div>

          <div className="flex flex-col items-center gap-2">
            <div className="bg-brand flex h-8 w-8 items-center justify-center rounded-full text-sm text-white">
              2
            </div>
            <span>Complete Profile</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-syne mb-1 text-xl font-semibold">
            Almost there!
          </h3>
          <p className="text-text2 text-xs">
            Fill in your details to finish creating your account.
          </p>
        </div>

        <form className="text-text2 mb-10 flex flex-col gap-4 text-sm">
          <div className="flex flex-col gap-1">
            <label>Full Name *</label>
            <input
              type="text"
              defaultValue={"Imran Hossain"}
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

          <div className="flex flex-col gap-1">
            <label>Student ID</label>
            <input
              type="text"
              value={"2023-3-60-202"}
              readOnly
              disabled
              className="bg-bg text-text border-border focus:border-brand-mid rounded-lg border-[1.5px] px-4 py-2"
            />
          </div>

          <div className="xs:flex-row flex flex-col gap-4">
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

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/250px-Facebook_f_logo_%282019%29.svg.png"
                className="w-4"
              />
              Facebook Profile URL
              <InfoTooltip text="Providing your Facebook profile is optional, but it can help us verify your identity and build trust within the marketplace." />
            </label>
            <input
              type="text"
              placeholder="facebook.com/yourprofile"
              className="text-text border-border focus:border-brand-mid rounded-lg border-[1.5px] px-4 py-2"
            />
          </div>
        </form>

        <div className="text-text2 flex gap-4 text-sm">
          <button
            className="hover:bg-bg2 border-border w-full cursor-pointer rounded-lg border-[1.5px] px-4 py-2 transition-colors"
            onClick={() => setVerficationStatus("pending")}
          >
            Cancel
          </button>

          <button
            onClick={() => navigate("/home")}
            className="hover:bg-brand-mid bg-brand flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 text-white transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
