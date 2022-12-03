import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { type Route as IRoute } from "features/routing/routes/routes";

interface Props {
  routes: Array<IRoute>;
}

export const Routing = ({ routes }: Props) => {
  const defaultPath = routes.find((item) => item.default === true)?.path;
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} element={route.element} path={route.path} />
      ))}
      {defaultPath && (
        <Route path="*" element={<Navigate to={defaultPath} replace />} />
      )}
    </Routes>
  );
};
