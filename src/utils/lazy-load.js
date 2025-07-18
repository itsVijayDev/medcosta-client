import React, { lazy, Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

/**
 * Creates a lazy-loaded component with a suspense wrapper
 *
 * @param {Function} importFn - The import function for the component
 * @param {React.ComponentType} [LoadingComponent] - Optional custom loading component
 * @returns {React.ComponentType} The lazy-loaded component wrapped in Suspense
 */
export const lazyLoad = (importFn, LoadingComponent = LoadingSpinner) => {
   const LazyComponent = lazy(importFn);

   return (props) => (
      <Suspense fallback={<LoadingComponent />}>
         <LazyComponent {...props} />
      </Suspense>
   );
};

/**
 * Creates a lazy-loaded component for named exports
 *
 * @param {string} path - The path to the module
 * @param {string} exportName - The name of the exported component
 * @param {React.ComponentType} [LoadingComponent] - Optional custom loading component
 * @returns {React.ComponentType} The lazy-loaded component wrapped in Suspense
 */
export const lazyLoadNamed = (
   path,
   exportName,
   LoadingComponent = LoadingSpinner
) => {
   const LazyComponent = lazy(() =>
      import(path).then((module) => ({ default: module[exportName] }))
   );

   return (props) => (
      <Suspense fallback={<LoadingComponent />}>
         <LazyComponent {...props} />
      </Suspense>
   );
};
