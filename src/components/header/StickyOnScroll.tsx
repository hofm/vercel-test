import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

interface OwnProps {
  children: React.ReactNode;
}

const StickyOnScroll = ({ children }: OwnProps) => {
  const { scrollY } = useScroll();
  const [offset, setOffset] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setOffset(latest);
  });

  return (
    <div
      className={`fixed left-0 top-0 z-[3000] w-full transition-all duration-500 ${
        offset > 2 ? "bg-white" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default StickyOnScroll;
