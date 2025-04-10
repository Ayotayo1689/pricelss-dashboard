import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Gamepad2,
  Building2,
  Film,
  ShoppingBag,
  CreditCard,
  Pizza,
  Building,
  LogOut,
} from "lucide-react";

import Logo from "../../assets/logo.svg";
import {
  BankOfAmericaIcon,
  DisneyIcon,
  IbmIcon,
  LogoutIcon,
  LouisIcon,
  MasterCardIcon,
  NintendoIcon,
  PizzaHutIcon,
  SettingIcon,
  WarningIcon,
} from "@/NycIcons/icons";

const sidebarItems = [
  {
    name: "Nintendo",
    icon: <NintendoIcon />,
    path: "/nintendo",
    bgColor: "bg-[#A93636]",
  },
  {
    name: "IBM",
    icon: <IbmIcon />,
    path: "/ibm",
  },
  {
    name: "The Walt Disney Company",
    icon: <DisneyIcon />,
    path: "/disney",
  },
  {
    name: "Louis Vuitton",
    icon: <LouisIcon />,
    path: "/louis-vuitton",
  },
  {
    name: "MasterCard",
    icon: <MasterCardIcon />,
    path: "/mastercard",
  },
  {
    name: "Pizza Hut",
    icon: <PizzaHutIcon />,
    path: "/pizza-hut",
  },
  {
    name: "MasterCard",
    icon: <SettingIcon />,
    path: "/mastercard-alt",
  },
  {
    name: "Bank of America",
    icon: <BankOfAmericaIcon />,
    path: "/bank-of-america",
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col bg-black text-white">
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className="flex-1 h-fit overflow-y-auto  mb-0 ">
        <nav className="flex flex-col  gap-1 px-2  mt-4">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-3 text-sm font-normal hover:bg-gray-800 transition-colors",
                location.pathname === item.path &&
                  (item.bgColor || "bg-gray-800")
              )}
            >
              <span className={cn("flex h-6 w-6 items-center justify-center")}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-gray-800 p-2">
        <nav className="grid gap-1 px-2">
          <Link
            to="/ibm-alt"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-normal hover:bg-gray-800 transition-colors"
          >
            <span className="flex h-6 w-6 items-center justify-center">
              <WarningIcon />
            </span>
            <span>IBM</span>
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-normal hover:bg-gray-800 transition-colors"
          >
            <span className="flex h-6 w-6 items-center justify-center">
              <LogoutIcon/>
            </span>
            <span>Log Out</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
