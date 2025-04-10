"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  RefreshCw,
  Download,
  Filter,
  ChevronDown,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/StatusBadge";
import {
  DownloadIcon,
  FilterIcon,
  HamIcon,
  NintendoIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
  UsersIcon,
} from "@/NycIcons/icons";
import TableFooter from "@/components/TableFooter";

export function Records() {
  const [activeTab, setActiveTab] = useState("all-records");

  const stats = [
    { label: "All", value: "100" },
    { label: "Active", value: "90" },
    { label: "Liquidated", value: "143" },
  ];

  const customers = [
    {
      id: "2000754032",
      name: "Miles, Esther",
      category: "Individual",
      principal: "NGN 10,000.00",
      alias: "whiteswan331",
      username: "bluerose234",
      status: "Active",
      lastUpdated: "Jan 24, 2022",
    },
    {
      id: "2000754032",
      name: "Black, Marvin",
      category: "Corporate",
      principal: "NGN 10,000.00",
      alias: "bigbear444",
      username: "brownfish258",
      status: "Liquidated",
      lastUpdated: "Jan 24, 2022",
    },
    {
      id: "2000754032",
      name: "Flores, Juanita",
      category: "Individual",
      principal: "NGN 10,000.00",
      alias: "crazyfish228",
      username: "beautifulion765",
      status: "Active",
      lastUpdated: "Jan 24, 2022",
    },
    {
      id: "2000754032",
      name: "Nguyen, Shane",
      category: "Individual",
      principal: "NGN 10,000.00",
      alias: "tinypanda866",
      username: "greenkoala398",
      status: "Liquidated",
      lastUpdated: "Jan 24, 2022",
    },
    {
      id: "2000754032",
      name: "Henry, Arthur",
      category: "Corporate",
      principal: "NGN 10,000.00",
      alias: "sadwolf727",
      username: "beautifulmouse112",
      status: "Liquidated",
      lastUpdated: "Jan 24, 2022",
    },
    {
      id: "2000754032",
      name: "Cooper, Kristin",
      category: "Corporate",
      principal: "NGN 10,000.00",
      alias: "ticklishkoala607",
      username: "purpleleoard757",
      status: "Liquidated",
      lastUpdated: "Jan 24, 2022",
    },
    {
      id: "2000754032",
      name: "Cooper, Kristin",
      category: "Individual",
      principal: "NGN 10,000.00",
      alias: "lazymeercat616",
      username: "whiterabbit554",
      status: "Active",
      lastUpdated: "Jan 24, 2022",
    },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className=" text-2xl md:text-3xl font-semibold">Nitendo</h1>
          <div className="flex items-center mt-4  text-sm text-muted-foreground">
            <span className="flex gap-2 items-center">
              {" "}
              <NintendoIcon /> Dashboard
            </span>
            <ChevronRight className="ml-2 h-6 w-5" />
            <span className="flex gap-2 items-center">
              {" "}
              <UsersIcon />{" "}
            </span>
            <span>Nitendo</span>
          </div>
        </div>

        <Button className="bg-[#A93636] flex hover:bg-green-400">
          <span className="flex items-center gap-2">
            {" "}
            <PlusIcon /> New Request
          </span>
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mb-6 border-b pb-2 flex gap-4">
        <span className="text-muted-foreground text-sm font-normal">
          Individual
        </span>
        <span className="text-muted-foreground text-sm font-normal">
          Corporate
        </span>
      </div>

      <div className=" rounded-xl overflow-clip bg-white">
        <div className="flex bg-white  border-b  p-6 flex-col sm:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-4 w-full sm:w-auto">
            {/* Left side: Tabs */}
            <div className="bg-gray-100 border rounded-lg p-1 flex">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "all-records"
                    ? "bg-white text-[#A93636] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("all-records")}
              >
                All Records
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  activeTab === "request"
                    ? "bg-white text-[#A93636] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("request")}
              >
                Request
              </button>
            </div>

            {/* Middle: Stats */}
            <div className="hidden sm:flex items-center divide-x">
              {stats.map((stat, index) => (
                <div key={index} className="px-6 py-2">
                  <div
                    className={`text-xs ${
                      stat.label === "Active" ? "text-[#A93636]" : "text-black"
                    }`}
                  >
                    {stat.label}
                  </div>
                  <div className="text-2xl font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Dropdown */}
          <div className="mt-4 sm:mt-0 w-full sm:w-auto">
            <button className="flex text-[#A93636] gap-2 items-center justify-between w-full sm:w-auto border border-[#A93636] rounded-lg px-4 py-1 text-sm">
              Created by System-wide
              <ChevronDown className="w-5" />
            </button>
          </div>

          {/* Mobile view for stats */}
          <div className="grid grid-cols-3 gap-4 mt-4 w-full sm:hidden">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  stat.label === "Active"
                    ? "border-red-200 bg-red-50"
                    : stat.label === "Liquidated"
                    ? "border-gray-200 bg-gray-50"
                    : "border-gray-200"
                }`}
              >
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex px-6 mb-12 flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Button
                variant="outline"
                className="w-full bg-muted font-normal rounded-lg  sm:w-auto"
              >
                Table Search Query
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="w-full flex-1   min-w-[300px] md:max-w-md lg:max-w-xl">
              <div className="relative">
                <div className="absolute  left-2 top-2  text-muted-foreground">
                  <SearchIcon />
                </div>

                <input
                  type="search"
                  placeholder="Search Parameter"
                  className="w-full rounded-lg border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
            </div>
          </div>

          <div className="flex text-[#A93636] gap-2">
            <Button
              className="font-medium text-sm border-none bg-[#A9363612] rounded-lg "
              variant="outline"
              size="sm"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Table
            </Button>
            <Button
              className="font-medium text-sm border-none bg-[#A9363612] rounded-lg "
              variant="outline"
              size="sm"
            >
              <DownloadIcon />
              Download Table
            </Button>
          </div>
        </div>

        <div className="rounded-md">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-white">
                  <th className="p-6 text-left text-sm font-medium">
                    <div className="flex items-center font-medium text-muted-foreground gap-2 whitespace-nowrap">
                      Customer Name/ID
                    </div>
                  </th>
                  <th className="p-6 text-left text-sm font-medium">
                    <div className="flex items-center font-medium text-muted-foreground gap-2 whitespace-nowrap">
                      Customer Category
                      <FilterIcon />
                    </div>
                  </th>
                  <th className="p-6 text-left text-sm font-medium">
                    <div className="flex items-center font-medium text-muted-foreground gap-2 whitespace-nowrap">
                      Principal
                    </div>
                  </th>
                  <th className="p-6 text-left text-sm font-medium">
                    <div className="flex items-center font-medium text-muted-foreground gap-2 whitespace-nowrap">
                      User Alias
                      <FilterIcon />
                    </div>
                  </th>
                  <th className="p-6 text-left text-sm font-medium">
                    <div className="flex items-center font-medium text-muted-foreground gap-2 whitespace-nowrap">
                      Status
                      <FilterIcon />
                    </div>
                  </th>
                  <th className="p-6 text-left text-sm font-medium">
                    <div className="flex items-center font-medium text-muted-foreground gap-2 whitespace-nowrap">
                      Last Updated
                      <FilterIcon />
                    </div>
                  </th>
                  <th className="p-6 text-left text-sm font-medium text-muted-foreground whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 1 ? "bg-white" : "bg-[#FAF8F7]"
                    }`}
                  >
                    <td className="px-6 py-3 text-sm whitespace-nowrap">
                      <div>
                        <div>{customer.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {customer.id}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-sm">{customer.category}</td>
                    <td className="px-6 py-3 text-sm">{customer.principal}</td>
                    <td className="px-6 py-3 text-sm">
                      <div>
                        <div>{customer.alias}</div>
                        <div className="text-xs text-muted-foreground">
                          {customer.username}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <StatusBadge status={customer.status} />
                    </td>
                    <td className="px-6 py-3 text-sm">
                      {customer.lastUpdated}
                    </td>
                    <td className="px-6 py-3 text-sm">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <HamIcon />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
<TableFooter/>
         
        </div>
      </div>
    </div>
  );
}
