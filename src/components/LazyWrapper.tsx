"use client";

import { Suspense, lazy, type ComponentType, type ReactElement } from "react";

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Default loading fallback optimized for mobile
const DefaultFallback = (): ReactElement => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

export default function LazyWrapper({ 
  children, 
  fallback = <DefaultFallback /> 
}: LazyWrapperProps): ReactElement {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}

// Utility function to create lazy components with mobile-optimized fallbacks
export function createLazyComponent<TProps extends Record<string, unknown>>(
  importFunc: () => Promise<{ default: ComponentType<TProps> }>,
  fallback?: React.ReactNode
): ComponentType<TProps> {
  const LazyComponent = lazy(importFunc);
  
  return ((props: TProps) => (
    <Suspense fallback={fallback || <DefaultFallback />}>
      <LazyComponent {...props} />
    </Suspense>
  )) as ComponentType<TProps>;
}
