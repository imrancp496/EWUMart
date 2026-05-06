import { ListIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Logo() {
  const navigate = useNavigate();
  return (
    <a
      onClick={() => navigate("/home")}
      className="font-syne mx-auto cursor-pointer text-xl font-extrabold text-white"
    >
      EWU<span className="text-accent">Mart</span>
    </a>
  );
}

function SearchBar({ isSearchOpen, setIsSearchOpen }) {
  return (
    <div className="absolute top-full left-0 z-50 flex w-full items-center bg-white px-4 shadow-lg">
      <input
        className="w-full py-2 focus:outline-none"
        type="text"
        placeholder="Search"
      />
      <button
        className="cursor-pointer"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <MagnifyingGlassIcon weight="bold" size={20} />
      </button>
    </div>
  );
}

export default function TopNavbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="relative z-50 w-full">
      <div className="bg-brand flex items-center px-4 py-2 text-white">
        <button className="cursor-pointer">
          <ListIcon size={28} />
        </button>
        <Logo />
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="cursor-pointer"
        >
          <MagnifyingGlassIcon weight="bold" size={20} />
        </button>
      </div>
      {isSearchOpen && (
        <SearchBar
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      )}
    </div>
  );
}
