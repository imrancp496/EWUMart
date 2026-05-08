import {
  PiShoppingCartSimple,
  PiBell,
  PiHouseLine,
  PiShoppingCartSimpleFill,
  PiBellFill,
  PiHouseLineFill,
} from "react-icons/pi";

import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="ml:hidden">
        <button
          onClick={() => navigate("/home")}
          className="flex cursor-pointer items-center justify-center"
        >
          {location.pathname.startsWith("/home") ? (
            <PiHouseLineFill size={24} />
          ) : (
            <PiHouseLine size={24} />
          )}
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/cart")}
          className="flex cursor-pointer items-center justify-center"
        >
          {location.pathname.startsWith("/cart") ? (
            <PiShoppingCartSimpleFill size={24} />
          ) : (
            <PiShoppingCartSimple size={24} />
          )}
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/notifications")}
          className="flex cursor-pointer items-center justify-center"
        >
          {location.pathname.startsWith("/notifications") ? (
            <PiBellFill size={24} />
          ) : (
            <PiBell size={24} />
          )}
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/profile")}
          className={`font-syne bg-brand-mid flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 ${location.pathname.startsWith("/profile") ? "border-white" : "border-none"} text-center text-sm font-bold text-white`}
        >
          R
        </button>
      </div>
    </>
  );
}
