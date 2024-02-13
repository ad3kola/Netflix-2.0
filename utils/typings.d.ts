import { StaticImageData } from "next/image";

export type GetStartedPropsFeatures = {
  h2: string;
  h3: string;
  img?: StaticImageData;
};
export type FAQProps = {
  question: string;
  answer1: string;
  answer2?: string;
};

export type FooterLinkProps = string[];
export type NavLinkProps = string[];

export type TMDBRequestProps = {
  allMovies?: string;
  action?: string;
  adventure?: string;
  animation?: string;
  comedy?: string;
  crime?: string;
  documentary?: string;
  drama?: string;
  music?: string;
  horror?: string;
  family?: string;
  fantasy?: string;
  history?: string;
  western?: string;
  romance: string;
  scienceFiction: string;
  tvMovie: string;
  thriller: string;
  war: string;
};

export type MovieProps = {
  adult: true;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type GenreRowProps = {
  title: string;
  fetchURL: string;
}

export type NetflixOffers = { feature: string; value: string; }

export type NetflixPlans = {
	title: string;
  gradient: string;
	res: string;
	offers: NetflixOffers[]
}

export type UserCredentialsProps = {
  email: string;
  photoURL: string;
  uid: string;
} 