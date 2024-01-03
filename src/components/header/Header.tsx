import * as React from "react";
import StickyOnScroll from "./StickyOnScroll";
import { MainNav } from "./MainNav";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import ScrollOffsetContainer from "./ScrollOffsetContainer";
import { PhoneCall } from "lucide-react";

const Header = () => {
  return (
    <header className="z-99999">
      <div className="mx-auto flex justify-end md:container md:justify-between">
        <MainNav />
        <a
          href="tel:+4976133885"
          className={cn(
            buttonVariants({ variant: "ghost", size: "content" }),
            "flex items-center space-x-4"
          )}
        >
          <PhoneCall className="h-7 w-7 text-cyan-600 transition-all duration-700" />
          <span className={"text-base"}>+49 (0)761 33885</span>
        </a>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
