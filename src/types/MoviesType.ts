export interface IMovie {
  id: number;
  poster_path: string;
  rating: number;
  title: string;
  vote_average: number;
}

export interface MoviesType {
  movies: {
    results: IMovie[];
  };
}

export interface MoviesTypeNowPlaying {
  results: IMovie[];
}
