import React from "react";
import * as RRD from "react-router-dom";
import Search from "../page";

function SearchRoutes({ path }: { path: string }) {
  return (
    <RRD.Routes>
      <RRD.Route index element={<Search />} />
      <RRD.Route path="*" element={<RRD.Navigate to={`/${path}`} />} />
    </RRD.Routes>
  );
}

export default SearchRoutes;
