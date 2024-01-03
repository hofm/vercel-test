import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 6, L24 6" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 18, L24 18" },
  closed: { d: "M0 18, L15 18" },
};

const path03Variants = {
  open: { d: "M12 12, L12 12" },
  closed: { d: "M0 12, L24 12" },
};

interface OwnProps {
  open: boolean;
}

const HamburgerButton = ({ open }: OwnProps) => {
  const [animation, setAnimation] = useState(open ? "open" : "closed");

  useEffect(() => {
    setAnimation("moving");
    setTimeout(() => {
      setAnimation(open ? "open" : "closed");
    }, 200);
  }, [open]);

  return (
    <>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          stroke="#000000"
          strokeWidth="2"
          animate={animation}
          variants={path01Variants}
        />
        <motion.path
          stroke="#000000"
          strokeWidth="2"
          animate={animation}
          variants={path02Variants}
        />
        <motion.path
          stroke="#000000"
          strokeWidth="2"
          animate={animation}
          variants={path03Variants}
        />
      </svg>
    </>
  );
};

export default HamburgerButton;
