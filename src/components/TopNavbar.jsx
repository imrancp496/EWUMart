import { ListIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState } from "react";
import BottomNavBar from "./BottomNavBar";

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
    <div className="xs:px-8 absolute top-full left-0 z-50 flex w-full items-center bg-white px-4 shadow-lg">
      <input
        className="w-full py-2 focus:outline-none"
        type="text"
        placeholder="Search in Marketplace..."
      />
      <button className="cursor-pointer" onClick={() => setIsSearchOpen(false)}>
        <MagnifyingGlassIcon weight="bold" size={20} />
      </button>
    </div>
  );
}

function DesktopSearchBar() {
  return (
    <div className="ml:flex text-text2 ml:gap-16 ml: relative hidden w-full max-w-sm items-center rounded-lg bg-white px-4 py-2 shadow-md lg:max-w-lg">
      <input
        className="w-full focus:outline-none"
        type="text"
        placeholder="Search in Marketplace..."
      />
      <button className="cursor-pointer">
        <MagnifyingGlassIcon weight="bold" size={20} />
      </button>
    </div>
  );
}

export default function TopNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="relative z-50 w-full">
        <div className="bg-brand ml:py-4 ml:justify-between xs:py-3 xs:px-8 flex items-center px-4 py-2 text-white">
          <button className="ml:hidden cursor-pointer">
            <ListIcon size={28} />
          </button>
          <Logo />
          <DesktopSearchBar />
          <div className="ml:contents hidden">
            <BottomNavBar />
          </div>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="ml:hidden cursor-pointer"
          >
            <MagnifyingGlassIcon weight="bold" size={20} />
          </button>
        </div>
        {isSearchOpen && (
          <MobileSearchBar
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />
        )}
      </div>
      <div className="ml:hidden bg-brand fixed bottom-0 left-0 flex w-full items-center justify-around py-3 text-white">
        <BottomNavBar />
      </div>
    </>
  );
}
