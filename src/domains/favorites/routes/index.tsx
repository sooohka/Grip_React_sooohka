import React from "react";
import * as RRD from "react-router-dom";
import Favorite from "../page";

function FavoritesRoutes({ path }: { path: string }) {
  return (
    <RRD.Routes>
      <RRD.Route index element={<Favorite />} />
      <RRD.Route path="*" element={<RRD.Navigate to={`/${path}`} />} />
    </RRD.Routes>
  );
}

export default FavoritesRoutes;
