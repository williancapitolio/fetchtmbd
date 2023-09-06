export interface IMovie {
  id?: number;
  poster_path?: string;
  title: string;
  vote_average: number;
}

export interface MoviesType {
  movies: {
    results: IMovie[];
  };
}
