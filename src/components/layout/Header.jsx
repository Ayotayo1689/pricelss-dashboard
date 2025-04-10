import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { BellIcon, IbmIcon, SearchIcon, UserIcon } from "@/NycIcons/icons";

export function Header({
  user = { name: "Eric Alewoya", branch: "Ikoyi Branch" },
  onMenuClick,
  sidebarOpen,
}) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  return (
    <header className="sticky py-4 top-0 z-10 flex min-h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="w-full flex-1  md:max-w-md lg:max-w-sm">
        <div className="relative">
          <div className="absolute  left-2 top-3  text-muted-foreground">
            <SearchIcon />
          </div>

          <input
            type="search"
            placeholder="Search Parameter & Params"
            className="w-full rounded-lg border border-input bg-background pl-8 pr-3 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="ml-auto  flex items-center gap-4">
        <div className="hidden text-sm text-muted-foreground md:block">
          {currentDate}
        </div>{" "}
        <span className="font-normal hidden md:block text-gray-300">|</span>
        <div className="hidden text-sm text-muted-foreground md:block">
          <span className="text-muted-foreground font-medium text-black mr-1">
            Business Date:
          </span>
          {currentDate}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-muted relative"
        >
          <BellIcon />
          <span className="absolute w-1.5 h-1.5 bg-red-600 top-[30%] right-[30%] rounded-full"></span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="hidden  bg-muted rounded-3xl items-center gap-2 md:flex"
            >
              <IbmIcon color="black" />

              <div className="flex font-normal items-center gap-1">
                <span className="text-sm">{user.branch}</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="hidden  bg-muted rounded-3xl items-center gap-2 md:flex"
            >
              <UserIcon />

              <div className="flex font-normal items-center gap-1">
                <span className="text-sm">{user.name}</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
