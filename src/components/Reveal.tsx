"use client";

import { useEffect, useRef, useState, memo, type ReactElement, type ReactNode } from "react";
import { clsx } from "clsx";

type Props = { children: ReactNode; className?: string; delay?: number };

function Reveal({ children, className, delay = 0 }: Props): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Use passive listener for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.disconnect();
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '50px' // Start animation slightly before element is visible
      }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={clsx(
        "transition duration-700 ease-out will-change-transform will-change-opacity",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {children}
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Reveal);


