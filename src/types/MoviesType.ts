//mostrando a imagem, título e ordenando por ordem decrescente de avaliação(vote_average).

export interface IMovie {
  poster_path: string;
  title: string;
  vote_average: number;
}

export interface MoviesType {
  movies: {
    results: IMovie[];
  };
}
