import { IMovie } from "@/domain/Movie";
import { buildRailItems } from "./rails";

const movie: IMovie = {
  posterUrl: "https://movie.poster",
  backdropUrl: "https://movie.1.backdrop",
  title: "Movie Title",
  originalTitle: "Título do filme",
  releaseDate: "2022-09-16",
  tagline: "Movie tagline",
  description: "Movie description",
  runtime: 167,
  genres: ["Action", "Drama"],
  recommendations: buildRailItems({ size: 4 }),
};

export const buildMovie = (props: Partial<IMovie> = {}): IMovie => ({
  ...movie,
  ...props,
});
