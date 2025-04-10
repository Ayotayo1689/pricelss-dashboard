import { cn } from "@/lib/utils"
import { ActiveIcon, LiquidatedIcon } from "@/NycIcons/icons"

export function StatusBadge({ status }) {
  const isActive = status === "Active"
  const isLiquidated = status === "Liquidated"

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        isActive && "bg-red-100 border border-[#A93636]",
        isLiquidated && "bg-gray-100 border text-[#494949] border-[#494949]",
      )}
    >
      {isActive && <span className="mr-1"><ActiveIcon/></span>}
      {isLiquidated && <span className="mr-1"><LiquidatedIcon/></span>}
      {status}
    </div>
  )
}
