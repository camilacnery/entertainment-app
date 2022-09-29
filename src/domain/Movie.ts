import { TRailItem } from "./Rail";

export type TMovie = {
  posterUrl: string;
  backdropUrl: string;
  title: string;
  originalTitle: string;
  releaseDate: string;
  tagline: string;
  description: string;
  genres: string[];
  recommendations: TRailItem[];
};
