import { useState, useEffect } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x:0, y:0});

  const updateMousePosition = (e: MouseEvent): void => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  })

  return mousePosition;
}