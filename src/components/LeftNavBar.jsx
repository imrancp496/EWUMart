import { useEffect } from "react";
import {
  PiPlusBold,
  PiClipboardTextBold,
  PiCaretDownBold,
  PiClockCounterClockwiseBold,
} from "react-icons/pi";

import { TbMessageReport } from "react-icons/tb";

function NavItem({ children }) {
  return (
    <li className="hover:bg-bg flex cursor-pointer items-center gap-4 rounded-md px-3 py-2">
      {children}
    </li>
  );
}

export default function LeftNavBar({ isNavOpen, setIsNavOpen }) {
  useEffect(() => {
    const setVh = () => {
      const rootFontSize =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const vh = (window.innerHeight * 0.01) / rootFontSize;
      document.documentElement.style.setProperty("--vh", `${vh}rem`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <>
      <div
        className={`ml:hidden xs:top-16 ml:top-18 fixed inset-0 top-14 z-50 bg-black/50 transition-opacity duration-300 ease-in-out ${
          isNavOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsNavOpen(false)}
      />
      <div className="ml:block hidden h-full w-62 shrink-0"></div>
      <nav
        className={`border-border 2xs:p-6 xs:top-16 ml:top-18 xs:h-[calc(var(--vh,1vh)*100-4rem)] ml:h-[calc(var(--vh,1vh)*100-4.5rem)] 2xs:w-62 fixed top-14 left-0 z-50 flex h-[calc(var(--vh,1vh)*100-3.5rem)] w-54 flex-col items-start gap-12 border-r bg-white p-4 transition-transform duration-300 ease-in-out ${
          isNavOpen
            ? "ml:shadow-none translate-x-0 shadow-2xl"
            : "ml:translate-x-0 -translate-x-full"
        }`}
      >
        <ul className="text-text2 2xs:text-base flex w-full flex-col gap-2 text-sm">
          <NavItem>
            <PiCaretDownBold size={18} />
            Categories
          </NavItem>
          <NavItem>
            <PiClockCounterClockwiseBold size={18} />
            Recently Viewed
          </NavItem>
        </ul>

        <div className="flex w-full flex-col gap-4">
          <h2 className="text-text3 font-dm-sans text-xs font-bold tracking-widest uppercase">
            Seller
          </h2>
          <ul className="text-text2 2xs:text-base flex w-full flex-col gap-2 text-sm">
            <NavItem>
              <PiPlusBold size={18} /> Sell Item
            </NavItem>
            <NavItem>
              <PiClipboardTextBold size={18} />
              Manage Posts
            </NavItem>
          </ul>
        </div>

        <div className="mt-auto flex w-full flex-col gap-4">
          <h2 className="text-text3 font-dm-sans text-xs font-bold tracking-widest uppercase">
            Report
          </h2>
          <ul className="text-text2 2xs:text-base flex w-full flex-col gap-2 text-sm">
            <NavItem>
              <TbMessageReport size={18} /> Report a Problem
            </NavItem>
          </ul>
        </div>
      </nav>
    </>
  );
}
