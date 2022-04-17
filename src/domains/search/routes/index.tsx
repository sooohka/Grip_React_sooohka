import React from "react";
import * as RRD from "react-router-dom";
import Search from "../page";

function SearchRoutes() {
  return (
    <RRD.Routes>
      <RRD.Route index element={<Search />} />
    </RRD.Routes>
  );
}

export default SearchRoutes;
