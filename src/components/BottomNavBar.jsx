import {
  ChatCircleDotsIcon,
  BellIcon,
  HouseLineIcon,
} from "@phosphor-icons/react";

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
          <HouseLineIcon
            weight={location.pathname.startsWith("/home") ? "fill" : "regular"}
            size={24}
          />
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/messages")}
          className="flex cursor-pointer items-center justify-center"
        >
          <ChatCircleDotsIcon
            weight={
              location.pathname.startsWith("/messages") ? "fill" : "regular"
            }
            size={24}
          />
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/notifications")}
          className="flex cursor-pointer items-center justify-center"
        >
          <BellIcon
            weight={
              location.pathname.startsWith("/notifications")
                ? "fill"
                : "regular"
            }
            size={24}
          />
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/profile")}
          className={`font-syne bg-brand-mid flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-full border-[2px] ${location.pathname.startsWith("/profile") ? "border-white" : "border-none"} text-center text-sm font-bold text-white`}
        >
          R
        </button>
      </div>
    </>
  );
}
