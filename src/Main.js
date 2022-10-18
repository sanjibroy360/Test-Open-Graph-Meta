import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "constants/routes";
import InvalidPage from "components/InvalidPage";

function Main() {
  return (
    <div className="relative">
      <Routes>
        {ROUTES.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.Component />}
          />
        ))}
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </div>
  );
}

export default React.memo(Main);
