import { TMDBRequestProps } from "./typings";

const api_key = process.env.TMDB_API_KEY!;

export const requests: TMDBRequestProps = {
  allMovies: `https://api.themoviedb.org/3/trending/all/week?api_key=0dab44259002a87bce3cb1d13dc6cc3b
	`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=28`,
  adventure: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=12`,
  animation: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=16`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=35`,
  crime: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=80`,
  documentary: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=99`,
  drama: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=18`,
  family: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=10751`,
  fantasy: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=14`,
  history: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=36`,
  horror: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=27`,
  music: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=10402`,
  romance: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=10749`,
  scienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=878`,
  tvMovie: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=10770`,
  thriller: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=53`,
  war: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=10752`,
  western: `https://api.themoviedb.org/3/discover/movie?api_key=0dab44259002a87bce3cb1d13dc6cc3b&with_genres=37`,
};
