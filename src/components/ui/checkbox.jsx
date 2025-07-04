import React from "react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
   return (
      <input
         type='checkbox'
         ref={ref}
         className={cn(
            "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2 focus:ring-offset-2",
            className
         )}
         {...props}
      />
   );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };
