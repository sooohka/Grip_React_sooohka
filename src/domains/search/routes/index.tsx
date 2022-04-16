import React from "react";
import * as RRD from "react-router-dom";
import MovieList from "../components/MovieList";
import Search from "../page";

function SearchRoutes() {
  return (
    <RRD.Routes>
      <RRD.Route index element={<Search />} />
    </RRD.Routes>
  );
}

export default SearchRoutes;
