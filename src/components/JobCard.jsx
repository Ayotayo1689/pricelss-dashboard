import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function JobCard({ title, description, icon, highlighted = false }) {
  return (
    <Card
      className={cn(
        "transition-all duration-300 ease-in-out hover:border-green-400 group overflow-hidden",
        highlighted && "border-[#A93636] bg-[#F9E9E9]"
      )}
    >
      {/* <CardContent className="p-4 transition-all duration-500 ease-in-out overflow-hidden shadow-none h-fit md:p-6"> */}

      <CardContent
        className={cn(
          "p-4 md:p-6 shadow-none h-fit max-h-[200px] group-hover:max-h-[500px] transition-all duration-500 ease-in-out overflow-hidden"
        )}
      >
        <div className="flex flex-col items-start gap-4">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full h-11 w-11 bg-muted relative ${
              highlighted && " bg-[#F9E9E9]"
            }`}
          >
            <div className={highlighted && "text-[#A93636]  "}> {icon}</div>
          </Button>

          <div className="grid gap-1">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p
              className={cn(
                "text-base text-muted-foreground transition-all duration-300",
                "line-clamp-2 group-hover:line-clamp-none"
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
