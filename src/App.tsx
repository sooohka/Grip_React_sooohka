import React from "react";
import MovieList from "./domains/search/components/MovieList";
import SearchBar from "./domains/search/components/SearchBar";
import Routes from "./routes";

function App() {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "40rem",
        background: "black",
      }}
    >
      <Routes />
    </div>
  );
}

export default App;
