"use client";

import { useEffect, useRef, type ReactElement, type ReactNode } from "react";
import { clsx } from "clsx";

interface TouchOptimizedProps {
  children: ReactNode;
  className?: string;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  onTouchMove?: () => void;
}

export default function TouchOptimized({
  children,
  className,
  onTouchStart,
  onTouchEnd,
  onTouchMove,
}: TouchOptimizedProps): ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Add touch event listeners with passive option for better performance
    const touchStartHandler = (_e: TouchEvent) => {
      onTouchStart?.();
      // Prevent default to avoid scrolling issues on mobile
      if (_e.touches.length > 1) {
        _e.preventDefault();
      }
    };

    const touchEndHandler = (_e: TouchEvent) => {
      onTouchEnd?.();
    };

    const touchMoveHandler = (_e: TouchEvent) => {
      onTouchMove?.();
    };

    // Add passive listeners for better scroll performance
    element.addEventListener('touchstart', touchStartHandler, { passive: true });
    element.addEventListener('touchend', touchEndHandler, { passive: true });
    element.addEventListener('touchmove', touchMoveHandler, { passive: true });

    return () => {
      element.removeEventListener('touchstart', touchStartHandler);
      element.removeEventListener('touchend', touchEndHandler);
      element.removeEventListener('touchmove', touchMoveHandler);
    };
  }, [onTouchStart, onTouchEnd, onTouchMove]);

  return (
    <div
      ref={ref}
      className={clsx(
        "touch-manipulation", // Optimize touch interactions
        className
      )}
      style={{
        // Optimize for touch scrolling
        WebkitOverflowScrolling: 'touch',
        // Prevent text selection on touch
        WebkitUserSelect: 'none',
        userSelect: 'none',
        // Optimize touch targets
        minHeight: '44px',
        minWidth: '44px',
      }}
    >
      {children}
    </div>
  );
}
