type Movie = {
  title: string;
  year: string;
  imdbID: string;
  type: Type;
  poster: string;
};

enum Type {
  Game = "game",
  Movie = "movie",
  Series = "series",
}

export type { Movie, Type };
