import Axios, { AxiosResponse } from "axios";
import { ResponseDto } from "./types";

const axiosInstance = Axios.create({});

axiosInstance.interceptors.response.use(
  (res: AxiosResponse<ResponseDto>) => {
    if (res.data.Response === "False") {
      return { ...res, data: { movies: [], error: res.data.Error } };
    }
    const movies = res.data.Search?.map((movie) => {
      const { Poster, Title, Type, Year, imdbID } = movie;
      return {
        poster: Poster,
        title: Title,
        type: Type,
        year: Year,
        imdbID,
      };
    });
    return { ...res, data: { movies } };
  },
  (err) => {
    if (err.message) {
      return Promise.reject(err);
    }
    return Promise.reject(new Error("무언가 잘못됬습니다."));
  }
);

export default axiosInstance;
