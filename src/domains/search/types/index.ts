type Movie = {
  title: string;
  year: string;
  imdbID: string;
  type: Type;
  poster: string;
};

type Type = "game" | "movie" | "series";

export type { Movie, Type };
