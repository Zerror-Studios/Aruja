"use client";
import { useState, useEffect, useCallback } from "react";

export default function useHeadroom(threshold = 100) {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true); // NEW: track top position
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    // Update header visibility
    if (currentY > lastScrollY && currentY > threshold) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    // Update top state
    setIsAtTop(currentY <= 10);

    setLastScrollY(currentY);
  }, [lastScrollY, threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { isVisible, isAtTop };
}
