import { AxiosResponse } from "axios";
import instances from "../../../modules/axios";
import { Movie } from "../../movie/types";

const { movieInstance } = instances;

type Params = {
  s: string;
  page: number;
};

type GetMoviesBySearchParam = (
  params: Params
) => Promise<AxiosResponse<{ movies: Movie[] }>>;

const getMoviesBySearchParam: GetMoviesBySearchParam = (params) =>
  movieInstance.get("", { params });

export default getMoviesBySearchParam;
