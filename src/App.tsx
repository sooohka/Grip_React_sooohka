import React from "react";
import MovieList from "./domains/movie/components/MovieList";
import SearchBar from "./domains/search/components/SearchBar";

function App() {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "40rem",
        background: "black",
      }}
    >
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;
