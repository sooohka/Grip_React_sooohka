import { AxiosResponse } from "axios";
import instances from "../../../modules/axios";
import { Movie } from "../types";

const { movieInstance } = instances;

type Params = {
  s: string;
  page: number;
};

type GetMoviesBySearchParamResponse = { movies: Movie[]; totalResults: string };

type GetMoviesBySearchParam = (
  params: Params
) => Promise<AxiosResponse<GetMoviesBySearchParamResponse>>;

const getMoviesBySearchParam: GetMoviesBySearchParam = (params) =>
  movieInstance.get("", { params });

export default getMoviesBySearchParam;
