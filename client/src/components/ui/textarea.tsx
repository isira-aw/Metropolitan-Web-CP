import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border border-black/[0.08] bg-[#f8f8f8] px-3 py-2 text-sm text-[#424242] ring-offset-background placeholder:text-[#424242]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#144A92]/15 focus-visible:border-[#144A92]/25 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
