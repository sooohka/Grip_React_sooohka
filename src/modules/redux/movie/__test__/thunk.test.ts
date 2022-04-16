import thunk from "redux-thunk";
import {
  addMovies,
  fetchMoviesFail,
  fetchMoviesStart,
  fetchMoviesSuccess,
  setTotalResults,
} from "../actions";
import fetchMoviesThunk from "../thunk";

const createFakeStoreWithThunk = () => {
  const store = {
    getState: jest.fn(),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = (action: any) => thunk(store)(next)(action);
  return { store, next, invoke };
};

describe("test thunks", () => {
  let fakeStore: ReturnType<typeof createFakeStoreWithThunk>;
  let fetcher: any;
  beforeEach(() => {
    fakeStore = createFakeStoreWithThunk();
    fetcher = jest.fn(() => Promise.resolve({ data: { movies: [] } })) as any;
  });

  it("thunk함수 첫번째 dispatch 될 때 실제로 dispatch 되면 안됨", async () => {
    const { invoke, next } = fakeStore;

    invoke(fetchMoviesThunk(fetcher));

    expect(next).not.toBeCalled();
  });

  it("thunk함수 실제 dispatch될 때 fetcher실행전 fetchMovieStart액션 실행되야함", () => {
    const { invoke, store } = fakeStore;

    invoke(fetchMoviesThunk(fetcher));

    expect(store.dispatch).toBeCalledWith(fetchMoviesStart());
    expect(store.dispatch).not.toBeCalledWith(addMovies([]));
  });

  it("thunk함수 실제 dispatch될 때 fetcher실행후 성공시 addMovies,fetchMoviesSuccess액션 실행되야함", async () => {
    const movie = {
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWNjZTJjZmYtYjhjZS00ZjgwLWFjY2UtMzBlMDkzZmM3M2FiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      title: "Iron Man: Armored Adventures",
      type: "series" as any,
      year: "2008–2012",
      imdbID: "tt0837143",
    };
    fetcher = jest.fn(() =>
      Promise.resolve({ data: { movies: [movie], totalResults: 1 } })
    ) as any;
    const { invoke, store } = fakeStore;

    invoke(fetchMoviesThunk(fetcher));

    await jest.fn();
    expect(store.dispatch).toBeCalledTimes(4);
    expect(fetcher).toBeCalledTimes(1);
    expect(store.dispatch).toBeCalledWith(fetchMoviesStart());
    expect(store.dispatch).toBeCalledWith(addMovies([movie]));
    expect(store.dispatch).toBeCalledWith(setTotalResults(1));
    expect(store.dispatch).toBeCalledWith(fetchMoviesSuccess());
  });

  it("thunk함수 실제 dispatch될 때 fetcher실행후 실패시 fetchMoviesFail액션 실행되야함", async () => {
    const err = new Error("error!");
    fetcher = jest.fn(() => Promise.reject(err)) as any;
    const { invoke, store } = fakeStore;

    invoke(fetchMoviesThunk(fetcher));

    await jest.fn();
    expect(store.dispatch).toBeCalledTimes(2);
    expect(fetcher).toBeCalledTimes(1);
    expect(store.dispatch).toBeCalledWith(fetchMoviesStart());
    expect(store.dispatch).toBeCalledWith(fetchMoviesFail(err));
  });
});
