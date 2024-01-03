"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export function MobileNav() {
  const [breakpoint] = useMediaQuery();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (
      breakpoint === "md" ||
      breakpoint === "lg" ||
      breakpoint === "xl" ||
      breakpoint === "2xl"
    ) {
      setOpen(false);
      document.body.classList.remove("blockSiteScrolling");
    }
  }, [breakpoint]);

  const toggle = () => {
    setOpen((current) => {
      if (current === false) {
        document.body.classList.add("blockSiteScrolling");
      } else {
        document.body.classList.remove("blockSiteScrolling");
      }
      return !current;
    });
  };

  return (
    <div className="relative md:hidden">
      <Sheet open={open} modal={false}>
        <Button
          className="m-3 rounded-full"
          onClick={toggle}
          variant="ghost"
          size="icon"
          name="Mobile Menu"
          aria-label="Mobile Menu"
        >
          <HamburgerButton open={open} />
        </Button>
        <SheetContent side="cover">
          <ul className="py-12">
            <li className="w-full">
              <a
                href="/"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "w-full justify-start text-lg"
                )}
                onClick={() => {
                  setOpen(false);
                  document.body.classList.remove("blockSiteScrolling");
                }}
              >
                Home
              </a>
            </li>
            <li className="w-full">
              <a
                href="/leistungen"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "w-full justify-start text-lg"
                )}
                onClick={() => {
                  setOpen(false);
                  document.body.classList.remove("blockSiteScrolling");
                }}
              >
                Leistungen
              </a>
            </li>
            <li className="w-full">
              <a
                href="/#ueber-uns"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "w-full justify-start text-lg"
                )}
                onClick={() => {
                  setOpen(false);
                  document.body.classList.remove("blockSiteScrolling");
                }}
              >
                Über uns
              </a>
            </li>
            <li className="w-full">
              <a
                href="/#team"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "w-full justify-start text-lg"
                )}
                onClick={() => {
                  setOpen(false);
                  document.body.classList.remove("blockSiteScrolling");
                }}
              >
                Team
              </a>
            </li>
            <li className="w-full">
              <a
                href="/#kontakt"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "w-full justify-start text-lg"
                )}
                onClick={() => {
                  setOpen(false);
                  document.body.classList.remove("blockSiteScrolling");
                }}
              >
                Kontakt
              </a>
            </li>
            <li className="w-full">
              <a
                href="/online-termin"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "w-full justify-start text-lg"
                )}
                onClick={() => {
                  setOpen(false);
                  document.body.classList.remove("blockSiteScrolling");
                }}
              >
                Online Termin
              </a>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
