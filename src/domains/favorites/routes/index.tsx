import React from "react";
import * as RRD from "react-router-dom";
import Favorite from "../page";

function FavoritesRoutes() {
  return (
    <RRD.Routes>
      <RRD.Route index element={<Favorite />} />
    </RRD.Routes>
  );
}

export default FavoritesRoutes;
