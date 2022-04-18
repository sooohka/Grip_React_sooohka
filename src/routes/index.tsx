import React from "react";
import * as RRD from "react-router-dom";
import FavoritesRoutes from "../domains/favorites/routes";
import SearchRoutes from "../domains/search/routes";

function Routes() {
  return (
    <RRD.Routes>
      <RRD.Route path="search/*" element={<SearchRoutes />} />
      <RRD.Route path="favorites/*" element={<FavoritesRoutes />} />
      <RRD.Route path="*" element={<RRD.Navigate to="search" />} />
    </RRD.Routes>
  );
}

export default Routes;
