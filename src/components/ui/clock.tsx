import * as React from "react";
import { cn } from "@/lib/utils";

function Clock({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-block", className)} {...props} />;
}

export { Clock };
