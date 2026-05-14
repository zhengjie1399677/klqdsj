import React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function Panel({ title, children, className, ...props }: PanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative flex flex-col rounded-sm border border-[#1e3a8a]/50 bg-[#020617]/80 backdrop-blur-sm p-3",
        "before:absolute before:top-0 before:left-0 before:w-3 before:h-3 before:border-t-2 before:border-l-2 before:border-cyan-400",
        "after:absolute after:top-0 after:right-0 after:w-3 after:h-3 after:border-t-2 after:border-r-2 after:border-cyan-400",
        className
      )}
      {...props}
    >
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
      
      <div className="flex items-center mb-2 flex-shrink-0">
        <div className="w-1.5 h-3 bg-cyan-400 mr-2 rounded-full" />
        <h3 className="text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 tracking-wider">
          {title}
        </h3>
      </div>
      <div className="flex-1 min-h-0 w-full">
        {children}
      </div>
    </motion.div>
  );
}

