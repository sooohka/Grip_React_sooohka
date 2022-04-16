import Axios, { AxiosResponse } from "axios";

type ResponseDto = {
  Search?: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: "game" | "movie" | "series";
    Poster: string;
  }[];
  totalResults?: string;
  Response: "True" | "False";
  Error?: string;
};

function parseMovieResponseDto(movies: ResponseDto["Search"] = []) {
  return movies.map((movie) => {
    const { Poster, Title, Type, Year, imdbID } = movie;
    return {
      poster: Poster,
      title: Title,
      type: Type,
      year: Year,
      imdbID,
    };
  });
}

const movieInstance = Axios.create({
  baseURL: "https://www.omdbapi.com",
  params: {
    apiKey: "92e32667",
  },
});

movieInstance.interceptors.response.use(
  (res: AxiosResponse<ResponseDto>) => {
    if (res.data.Response === "False") {
      return { ...res, data: { movies: [], error: res.data.Error } };
    }

    const movies = parseMovieResponseDto(res.data.Search);
    return { ...res, data: { movies } };
  },
  (err) => {
    if (err.response) {
      const { data } = err.response;
      return Promise.reject(new Error(data.Error));
    }
    if (err.message) {
      return Promise.reject(new Error(err.message));
    }
    return Promise.reject(new Error("무언가 잘못됬습니다."));
  }
);

export default movieInstance;
