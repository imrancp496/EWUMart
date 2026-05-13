import { PiX } from "react-icons/pi";
import CustomSelect from "../components/CustomSelect";
import { useState, useEffect } from "react";

const reasonOptions = [
  { value: "bug", label: "Bug" },
  { value: "spam", label: "Spam" },
  { value: "fraud", label: "Fraud" },
  { value: "inappropriate", label: "Inappropriate Content" },
  { value: "harassment", label: "Harassment" },
  { value: "other", label: "Other" },
];

export default function ReportModal({ isOpen, onClose }) {
  const [reason, setReason] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the report can be added here
    onClose();
  };

  return (
    <div
      className="1sm:items-center 1sm:p-4 fixed inset-0 z-200 flex items-end justify-center bg-black/50 p-1"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-lg bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-border 1sm:px-8 1sm:py-6 relative flex items-center border-b p-4">
          <h2 className="2xs:text-xl mx-auto text-lg font-semibold">
            Report Details
          </h2>

          <button
            onClick={onClose}
            className="2xs:h-10 2xs:w-10 1sm:right-8 absolute right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 hover:text-gray-700 focus:outline-none"
          >
            <PiX size={20} />
          </button>
        </div>

        <div className="1sm:px-8 1sm:py-6 p-4">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="text-text2 2sm:gap-6 flex flex-col gap-4 pb-4">
              <div className="flex flex-col gap-1">
                <label>Reason:</label>
                <CustomSelect
                  options={reasonOptions}
                  placeholder="Select"
                  value={reason}
                  onChange={setReason}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label>Details:</label>
                <textarea
                  rows={5}
                  placeholder="Describe the issue..."
                  className="text-text border-border focus:border-brand-mid resize-none rounded-lg border-[1.5px] px-4 py-2"
                />
              </div>
            </div>

            <div className="flex items-center justify-center pt-4">
              <button
                type="submit"
                className="bg-brand-mid hover:bg-brand-mid-dark w-full max-w-xs cursor-pointer rounded-lg px-4 py-2 text-white focus:outline-none"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
