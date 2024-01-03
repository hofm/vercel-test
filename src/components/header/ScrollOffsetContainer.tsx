"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useState } from "react";

interface OwnProps {
  children?: React.ReactNode;
  className?: string;
}

const ScrollOffsetContainer = ({ children, className }: OwnProps) => {
  const { scrollY } = useScroll();
  const [offset, setOffset] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setOffset(latest);
  });

  return (
    <div
      className={cn(
        "hidden items-center transition-all duration-500 md:flex",
        offset <= 2 ? "opacity-0" : "opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollOffsetContainer;
