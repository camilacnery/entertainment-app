export interface ITMDBList {
  page: number;
  results: ITMDBMovie[];
  total_pages: number;
  total_results: number;
}

export interface ITMDBMovie {
  id: number;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  title: string;
  name?: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  media_type: string;
}

export interface ITMDBGenre {
  id: number;
  name: string;
}

export interface ITMDBProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ITMDBProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ITMDBSpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ITMDBMovieDetails {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: ITMDBGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ITMDBProductionCompany[];
  production_countries: ITMDBProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ITMDBSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
