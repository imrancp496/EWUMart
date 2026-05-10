import { PiList, PiMagnifyingGlassBold, PiXBold } from "react-icons/pi";
import { useState } from "react";
import BottomNavBar from "./BottomNavBar";
import NotificationModal from "../modals/NotificationModal";

function Logo() {
  return (
    <a
      href="/home"
      className="font-syne xs:text-2xl ml:mx-0 mx-auto cursor-pointer text-xl font-extrabold text-white"
    >
      EWU<span className="text-accent">Mart</span>
    </a>
  );
}

function MobileSearchBar({ setIsSearchOpen }) {
  return (
    <div className="ml:hidden text-text2 xs:px-8 absolute top-full left-0 z-50 flex w-full items-center bg-white px-4 shadow-lg">
      <input
        className="xs:py-4 w-full py-2 focus:outline-none"
        type="text"
        placeholder="Search in Marketplace..."
      />
      <button className="cursor-pointer" onClick={() => setIsSearchOpen(false)}>
        <PiMagnifyingGlassBold size={20} />
      </button>
    </div>
  );
}

function DesktopSearchBar() {
  return (
    <div className="ml:flex text-text2 relative hidden w-full max-w-md min-w-0 items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-md lg:max-w-lg xl:max-w-xl">
      <input
        className="w-full min-w-0 focus:outline-none"
        type="text"
        placeholder="Search in Marketplace..."
      />
      <button className="cursor-pointer">
        <PiMagnifyingGlassBold size={20} />
      </button>
    </div>
  );
}

export default function TopNavbar({ isNavOpen, setIsNavOpen }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <>
      <div className="h-14 xs:h-16 ml:h-18 w-full shrink-0"></div>
      <div className="fixed top-0 z-50 w-full">
        <div className="bg-brand xs:h-16 ml:h-18 flex h-14 w-full items-center text-white">
          <div className="ml:flex hidden w-62 items-center px-6">
            <Logo />
          </div>
          <div className="ml:justify-between xs:px-8 ml:gap-4 mx-auto flex w-full max-w-6xl flex-1 items-center justify-between gap-2 px-4">
            <button
              className="ml:hidden cursor-pointer transition-transform active:scale-95"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <PiXBold size={28} /> : <PiList size={28} />}
            </button>
            <div className="ml:hidden mx-auto">
              <Logo />
            </div>
            <DesktopSearchBar />
            <div className="ml:contents hidden">
              <BottomNavBar 
                isNotificationOpen={isNotificationOpen}
                setIsNotificationOpen={setIsNotificationOpen}
              />
            </div>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="ml:hidden cursor-pointer"
            >
              <PiMagnifyingGlassBold size={20} />
            </button>
          </div>
          {isSearchOpen && (
            <MobileSearchBar
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
            />
          )}
        </div>
      </div>
      <div className="ml:hidden bg-brand-dark/85 fixed bottom-4 left-1/2 z-[60] flex w-[95%] max-w-2xl -translate-x-1/2 items-center justify-around rounded-2xl border border-white/10 py-3 text-white shadow-2xl backdrop-blur-md">
        <BottomNavBar 
          isNotificationOpen={isNotificationOpen}
          setIsNotificationOpen={setIsNotificationOpen}
        />
      </div>
      <NotificationModal 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)} 
      />
    </>
  );
}
