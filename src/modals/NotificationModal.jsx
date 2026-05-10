import { PiBellSlash } from "react-icons/pi";

export default function NotificationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="ml:block fixed inset-0 z-40 hidden"
        onClick={onClose}
      ></div>

      <div className="ml:block border-border fixed top-18 right-[10%] z-50 hidden w-90 overflow-hidden rounded-2xl border bg-white shadow-md xl:right-[15%] 2xl:right-[20%]">
        <div className="border-border border-b px-6 py-4">
          <h3 className="text-text text-lg font-bold">Notifications</h3>
        </div>
        <div className="text-text3 flex h-72 flex-col items-center justify-center text-center">
          <PiBellSlash size="3rem" className="mb-4" />
          <p className="text-text2 text-base font-medium">
            No notifications yet
          </p>
        </div>
      </div>

      <div className="ml:hidden bg-brand-dark/40 fixed inset-0 z-50 flex flex-col justify-end px-2 pt-4 pb-22">
        <div className="absolute inset-0" onClick={onClose}></div>

        <div className="relative z-50 mx-auto w-full max-w-md rounded-3xl bg-white px-6 pt-4 pb-6 shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-text text-xl font-bold">Notifications</h3>
          </div>
          <div className="border-border text-text3 mt-2 flex h-64 flex-col items-center justify-center border-t pt-4 text-center">
            <PiBellSlash size="3rem" className="mb-4" />
            <p className="text-text2 text-base font-medium">
              No notifications yet
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
