import React, { ReactNode } from "react";
import { Link } from "react-scroll";

interface SmoothScrollProps {
  to: string;
  children: ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ to, children }) => {
  return (
    <Link to={to} smooth={true} offset={-100} duration={500}>
      {children}
    </Link>
  );
};

export default SmoothScroll;
