import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ArrowUp = () => {
  const [showArrow, setShowArrow] = useState(false);

  const checkScrollTop = () => {
    if (!showArrow && window.pageYOffset > 400) {
      setShowArrow(true);
    } else if (showArrow && window.pageYOffset <= 400) {
      setShowArrow(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showArrow]);

  return (
    <div
      className="arrow-up p-3"
      onClick={scrollTop}
      style={{ display: showArrow ? "flex" : "none" }}
    >
      <FaChevronUp />
    </div>
  );
};

export default ArrowUp;
