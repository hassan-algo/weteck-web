"use client"
import { useEffect } from "react";
const CursorComponent = () => {
  useEffect(() => {
    const cursorRounded = document.querySelector('.custom-cursor') as HTMLElement;
    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return null; // or an empty div, as this component doesn't render anything
};

export default CursorComponent;
