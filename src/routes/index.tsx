import React from "react";
import * as RRD from "react-router-dom";
import FavoritesRoutes from "../domains/favorites/routes";
import SearchRoutes from "../domains/search/routes";

function Routes() {
  return (
    <RRD.Routes>
      <RRD.Route path="search/*" element={<SearchRoutes path="search" />} />
      <RRD.Route
        path="favorites/*"
        element={<FavoritesRoutes path="favorites" />}
      />
      <RRD.Route path="*" element={<RRD.Navigate to="search" />} />
    </RRD.Routes>
  );
}

export default Routes;
