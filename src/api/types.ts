type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MovieType;
  Poster: string;
};

enum MovieType {
  Game = "game",
  Movie = "movie",
  Series = "series",
}

type ResponseDto = {
  Search?: Movie[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
};

type P = {};

export type { ResponseDto, P };
