import React, { lazy, Suspense } from "react";

function lazyload(importFunction = () => {}, fallback = null) {
  const lazyFactory = importFunction;
  const LazyComponent = lazy(lazyFactory);

  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}

export default lazyload;
