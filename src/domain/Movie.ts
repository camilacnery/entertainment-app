import { IRailItem } from "./Rail";

export interface IMovie {
  posterUrl: string;
  backdropUrl: string;
  title: string;
  originalTitle?: string;
  releaseDate?: string;
  tagline?: string;
  description?: string;
  runtime?: number;
  genres: string[];
  recommendations: IRailItem[];
}
